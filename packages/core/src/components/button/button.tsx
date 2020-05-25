import * as React from "react";
import * as Spring from "react-spring";

import * as Common from "~/common";
import * as Components from "~/components";
import * as Util from "~/util";

import * as Abstract from "./button.abstract";
import * as Styled from "./button.styled";

export class Button extends Abstract.AbstractButton<React.ButtonHTMLAttributes<HTMLButtonElement>> {
	public static displayName = `${Common.DISPLAYNAME_PREFIX}.Button`;

	public render() {
		return (
			<Styled.Button.Element type="button" {...Util.removeNonHTMLProps(this.props)} {...this.getCommonButtonProps()}>
				{this.renderChildren()}
			</Styled.Button.Element>
		);
	}
}

export class AnchorButton extends Abstract.AbstractButton<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
	public static displayName = `${Common.DISPLAYNAME_PREFIX}.AnchorButton`;

	public render() {
		const { href, tabIndex = 0 } = this.props;
		const commonProps = this.getCommonButtonProps();

		const AniamtedAnchorElement = Spring.animated("a");
		return (
			<Styled.Button.Element
				as={AniamtedAnchorElement}
				role="button"
				{...Util.removeNonHTMLProps(this.props)}
				{...commonProps}
				href={commonProps.disabled ? undefined : href}
				tabIndex={commonProps.disabled ? -1 : tabIndex}
			>
				{this.renderChildren()}
			</Styled.Button.Element>
		);
	}
}
