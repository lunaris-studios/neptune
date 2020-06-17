const path = require("path");

module.exports = {
	stories: ["../src/components/**/*.story.(tsx|mdx)"],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-actions",
		"@storybook/addon-backgrounds",
		"@storybook/addon-events",
		"@storybook/addon-jest",
		"@storybook/addon-knobs",
		"@storybook/addon-links",
		"@storybook/addon-storysource",
		"@storybook/addon-viewport",
		{
			name: "@storybook/preset-typescript",
			options: {
				tsLoaderOptions: {
					configFile: path.resolve(__dirname, "./tsconfig.json"),
				},
			},
		},
		{
			name: "@storybook/addon-docs",
			options: {
				configureJSX: true,
				babelOptions: {},
				sourceLoaderOptions: null,
			},
		},
	],
	webpackFinal: async (config) => {
		config.resolve.alias = {
			"~": path.resolve(__dirname, "..", "src"),
		};

		config.module.rules.unshift({
			test: /\.svg$/,
			use: ["@svgr/webpack", "url-loader"],
		});

		return config;
	},
};
