/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import classNames from "classnames";
import * as React from "react";

import * as Common from "~/common";
import * as Components from "~/components";

export interface IMenuDividerProps extends Common.IProps {
	/** This component does not support children. */
	children?: never;

	/** Optional header title. */
	title?: React.ReactNode;
}

export class MenuDivider extends React.Component<IMenuDividerProps, {}> {
	public static displayName = `${Common.DISPLAYNAME_PREFIX}.MenuDivider`;

	public render() {
		const { title } = this.props;

		if (title == null) {
			// simple divider
			return <li />;
		} else {
			// section header with title
			return (
				<li>
					<Components.H6>{title}</Components.H6>
				</li>
			);
		}
	}
}
