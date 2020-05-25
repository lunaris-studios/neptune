import {default as classNames} from "classnames";
import * as React from "react";

import * as Style from "~/style";

export interface IElementRefProps<E extends HTMLElement> {
	/** Ref handler to access the instance of the internal HTML element. */
	elementRef?: (ref: E | null) => void;
}

function htmlElement<E extends HTMLElement>(
	tagName: keyof JSX.IntrinsicElements,
	tagClassName: string
): React.SFC<React.HTMLProps<E> & IElementRefProps<E>> {
	return (props) => {
		const { className, elementRef, ...htmlProps } = props;
		return React.createElement(tagName, {
			...htmlProps,
			className: classNames(tagClassName, className),
			ref: elementRef,
		});
	};
}

// the following components are linted by blueprint-html-components because
// they should rarely be used without the Blueprint classes/styles:

export const H1 = htmlElement<HTMLHeadingElement>("h1", Style.Classes.HEADING);
export const H2 = htmlElement<HTMLHeadingElement>("h2", Style.Classes.HEADING);
export const H3 = htmlElement<HTMLHeadingElement>("h3", Style.Classes.HEADING);
export const H4 = htmlElement<HTMLHeadingElement>("h4", Style.Classes.HEADING);
export const H5 = htmlElement<HTMLHeadingElement>("h5", Style.Classes.HEADING);
export const H6 = htmlElement<HTMLHeadingElement>("h6", Style.Classes.HEADING);

export const Blockquote = htmlElement<HTMLElement>(
	"blockquote",
	Style.Classes.BLOCKQUOTE
);
export const Code = htmlElement<HTMLElement>("code", Style.Classes.CODE);
export const Pre = htmlElement<HTMLElement>("pre", Style.Classes.CODE_BLOCK);
export const Label = htmlElement<HTMLLabelElement>("label", Style.Classes.LABEL);

// these two are not linted by blueprint-html-components because there are valid
// uses of these elements without Blueprint styles:
export const OL = htmlElement<HTMLOListElement>("ol", Style.Classes.LIST);
export const UL = htmlElement<HTMLUListElement>("ul", Style.Classes.LIST);
