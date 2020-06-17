.EXPORT_ALL_VARIABLES:

# === Shell Configuration ===

SHELL := /bin/bash

UNAME_OS := $(shell uname -s | tr '[:upper:]' '[:lower:]')
UNAME_ARCH := $(shell uname -m | tr '[:upper:]' '[:lower:]')

TMP_BASE := vendor
TMP := $(TMP_BASE)
TMP_BIN = $(TMP)/bin
TMP_VERSIONS := $(TMP)/versions

# === Environment ===

ROOT_DIR := $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
CONFIG := $(ROOT_DIR)/config
SETTINGS_DIR := $(CONFIG)/settings

STAGE ?= development
ENV_PROJECT_STAGE = $(STAGE)

NPM_BIN := ./node_modules/.bin
PATH := $(NPM_BIN):$(GOBIN):$(PATH):$(TMP_BIN)

# Export `.tool-versions` entries as environment variables
# with the pattern "<DEPENDENCY_NAME>_VERSION=<DEPENDENCY_VERSION>"
# to the temp file `.tool-versiions.env`
include .tool-versions.env

.PHONY: .tool-versions.env
.tool-versions.env: .tool-versions
	@(sed -e 's/\(.*\)\ \(.*\)/\1_VERSION=\2/g' | tr '[:lower:]' '[:upper:]') < $< > $@

include .env

.PHONY: .env
.env: $(SETTINGS_DIR)/$(STAGE).json
	@(python ./scripts/python/jsontoenv.py) < $< > $@

.PHONY: .env.yaml
.env.yaml: $(SETTINGS_DIR)/$(STAGE).json
	@(python ./scripts/python/jsontoyaml.py) < $< > $@

# === Niv Dependencies ===

.PHONY: niv-update
niv-update:
	niv update

# === Development / Debug ===

.PHONY: skaffold-dev
skaffold-dev:
	skaffold dev -p $(SKAFFOLD_PROFILE) --port-forward=true --force=false --default-repo=$(DOCKER_REPO)

.PHONY: skaffold-debug
skaffold-debug: generate
	skaffold debug -v info --port-forward --rpc-http-port 43603 -p $(SKAFFOLD_PROFILE)

#

.PHONY: skaffold-dev-development
skaffold-dev-development:
	@$(MAKE) -s skaffold-dev SKAFFOLD_PROFILE=development

.PHONY: skaffold-dev-staging
skaffold-dev-staging:
	@$(MAKE) -s skaffold-dev SKAFFOLD_PROFILE=staging STAGE=staging

.PHONY: skaffold-dev-production
skaffold-dev-production:
	@$(MAKE) -s skaffold-dev SKAFFOLD_PROFILE=production STAGE=production

#

.PHONY: skaffold-debug-development
skaffold-debug-development:
	@$(MAKE) -s skaffold-debug SKAFFOLD_PROFILE=development

.PHONY: skaffold-debug-staging
skaffold-debug-staging:
	@$(MAKE) -s skaffold-debug SKAFFOLD_PROFILE=staging STAGE=staging

.PHONY: skaffold-debug-production
skaffold-debug-production:
	@$(MAKE) -s skaffold-debug SKAFFOLD_PROFILE=production STAGE=production

# === Deployment ===

.PHONY: deploy
deploy: setup proto
	skaffold run -p $(SKAFFOLD_PROFILE) --default-repo=gcr.io/$(ENV_GCLOUD_PROJECT_ID)

# === Delete ===

.PHONY: skaffold-delete
skaffold-delete:
	@skaffold delete -p $(SKAFFOLD_PROFILE)

.PHONY: skaffold-delete-development
skaffold-delete-development:
	@$(MAKE) delete SKAFFOLD_PROFILE=development

.PHONY: skaffold-delete-staging
skaffold-delete-staging:
	@$(MAKE) delete SKAFFOLD_PROFILE=staging STAGE=staging

.PHONY: skaffold-delete-production
skaffold-delete-production:
	@$(MAKE) delete SKAFFOLD_PROFILE=production STAGE=production

# === Config ===

.PHONY: config
config:
	@$(MAKE) .env
	@$(MAKE) .env.yaml

# === Generate ===

.PHONY: generate
generate:
	@$(MAKE) -s config

# === Scripts ===

.PHONY: script
script:
	@. ./scripts/$(SCRIPT_TYPE)/$(SCRIPT_NAME).sh

.PHONY: helm
helm:
	@$(MAKE) -s script SCRIPT_TYPE=bash SCRIPT_NAME=helm

.PHONY: gke
gke:
	@$(MAKE) -s script SCRIPT_TYPE=bash SCRIPT_NAME=gke

.PHONY: setup
setup:
	@$(MAKE) -s gke
	@$(MAKE) -s helm

# === Aliases ===

.PHONY: dev
dev:
	@$(MAKE) -s skaffold-dev-development

.PHONY: development
development:
	@$(MAKE) -s skaffold-dev-development

.PHONY: stage
stage:
	@$(MAKE) -s skaffold-dev-development

.PHONY: staging
staging:
	@$(MAKE) -s skaffold-dev-development

.PHONY: prod
prod:
	@$(MAKE) -s skaffold-dev-development

.PHONY: production
production:
	@$(MAKE) -s skaffold-dev-development		
