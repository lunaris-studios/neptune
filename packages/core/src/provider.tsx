import * as React from "react";
import * as SC from "styled-components";

import * as Common from "./common";
import { Theme } from "./theme";

export interface IProviderProps {
	theme?: typeof Theme;
}

const defaultProps = Object.freeze<IProviderProps>({
	theme: Theme,
});

export class Provider extends React.Component<IProviderProps, {}> {
	public static displayName = `${Common.DISPLAYNAME_PREFIX}.AnchorButton`;

	static readonly defaultProps: IProviderProps = defaultProps;

	public render() {
		const { children, theme } = this.props;
		return <SC.ThemeProvider theme={theme}>{children}</SC.ThemeProvider>;
	}
}
