module.exports = {
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
		".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/file-transformer.js",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	testPathIgnorePatterns: ["node_modules", ".cache"],
	setupFiles: ["<rootDir>/jest/loader-shim.js"],
	setupFilesAfterEnv: [
		"@testing-library/jest-dom/extend-expect",
		"@testing-library/jest-dom",
		"jest-styled-components",
		"jest-extended",
	],
};
