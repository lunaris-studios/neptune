import * as FS from "fs";
import * as Path from "path";

import { default as SVGO } from "svgo";

import * as IconMetadata from "../resources/icons/icons.json";

const svgo = new SVGO({ plugins: [{ convertShapeToPath: { convertArcs: true } }] });

interface IconMetadata {
	/**
	 * Identifer for the icon's display name
	 */
	displayName: string;

	/**
	 * Identifer for CSS class name
	 */
	iconName: string;

	/**
	 * Comma separated list of tags describing this icon
	 */
	tags: string;

	/**
	 * Group to which this icon belongs
	 */
	group: string;

	/**
	 * Unicode character for icon glyph in font
	 */
	content?: string;
}

const ICONS_METADATA: IconMetadata[] = IconMetadata.sort((a, b) => a.iconName.localeCompare(b.iconName));
const ICONS_WITH_FONT_SUPPORT: IconMetadata[] = ICONS_METADATA.filter((icon) => typeof icon.content === "string");
const GENERATED_SRC_DIR: string = Path.resolve(process.cwd(), "./src/generated");

if (!FS.existsSync(GENERATED_SRC_DIR)) {
	FS.mkdirSync(GENERATED_SRC_DIR);
}

// map for iterating through icons with font support
writeLinesToFile(
	"_icon-map.scss",
	'@import "icon-variables";',
	"$icons: (",
	...ICONS_WITH_FONT_SUPPORT.map((icon) => `  "${icon.iconName}": ${toSassVariable(icon)},`),
	");",
);

// list out content strings for icons with font support
writeLinesToFile(
	"_icon-variables.scss",
	...ICONS_WITH_FONT_SUPPORT.map((icon) => `${toSassVariable(icon)}: "${icon.content!}";`),
);

// map ENUM_NAME to unicode character
writeLinesToFile(
	"icon-content.ts",
	...ICONS_WITH_FONT_SUPPORT.map(
		(icon) => `export const ${toEnumName(icon)} = "${icon.content!.replace("\\", "\\u")}";`,
	),
);

// map ENUM_NAME to icon-name, must include ALL icons (not just those with font support)
// so that we can reference their SVG paths
writeLinesToFile(
	"icon-names.ts",
	...ICONS_METADATA.map((icon) => `export const ${toEnumName(icon)} = "${icon.iconName}";`),
);

(async () => {
	// SVG path strings. IIFE to unwrap async.
	writeLinesToFile(
		"icon-svg-paths.ts",
		'import { IconName } from "../icon-name";',
		"",
		"export const IconSvgPaths16: Record<IconName, string[]> = {",
		...(await buildPathsObject("IconSvgPaths", 16)),
		"};",
		"",
		"export const IconSvgPaths20: Record<IconName, string[]> = {",
		...(await buildPathsObject("IconSvgPaths", 20)),
		"};",
	);
})();

/**
 * Writes lines to given filename in GENERATED_SRC_DIR.
 * @param {string} filename
 * @param {Array<string>} lines
 */
async function writeLinesToFile(filename: string, ...lines: string[]): Promise<void> {
	const outputPath = Path.join(GENERATED_SRC_DIR, filename);
	const contents = [...lines, ""].join("\n");
	FS.writeFileSync(outputPath, contents);
}

/**
 * Returns Sass variable name `$pt-icon-{name}`.
 * @param {IconMetadata} icon
 */
function toSassVariable(icon: IconMetadata): string {
	return `$pt-icon-${icon.iconName}`;
}

/**
 * Converts iconName to uppercase constant name.
 * Example: `"align-left"` &rArr; `"ALIGN_LEFT"`
 * @param {IconMetadata} icon
 */
function toEnumName(icon: IconMetadata): string {
	return icon.iconName.replace(/-/g, "_").toUpperCase();
}

/**
 * Loads SVG file for each icon, extracts path strings `d="path-string"`,
 * and constructs map of icon name to array of path strings.
 * @param {string} objectName
 * @param {16 | 20} size
 */
async function buildPathsObject(objectName: string, size: number): Promise<string[]> {
	return Promise.all(
		ICONS_METADATA.map(async (icon) => {
			const filepath = Path.resolve(__dirname, `../../resources/icons/${size}px/${icon.iconName}.svg`);
			const svg = FS.readFileSync(filepath, "utf-8");
			const pathStrings = await svgo
				.optimize(svg, { path: filepath })
				.then(({ data }) => data.match(/ d="[^"]+"/g) || [])
				.then((paths) => paths.map((s) => s.slice(3)));
			return `    "${icon.iconName}": [${pathStrings.join(",\n")}],`;
		}),
	);
}
