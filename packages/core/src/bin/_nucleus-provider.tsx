import * as Protocol from "@nucleus/protocol";
import * as React from "react";
import * as RT from "react-typography";
import * as SC from "styled-components";

import * as Components from "~/components";

export interface INucleusProviderProps {
	theme: Protocol.Theme;
	typography: Protocol.Typography;
}

const defaultProps = Object.freeze<INucleusProviderProps>({
	theme: Protocol.Theme,
	typography: Protocol.Typography,
});

export class NucleusProvider extends Components.AbstractPureComponent<INucleusProviderProps> {
	static readonly defaultProps: INucleusProviderProps = defaultProps;

	public render() {
		const { children, theme, typography } = this.props;
		return (
			<React.Fragment>
				<Components.Head />
				<RT.TypographyStyle typography={typography} />
				<SC.ThemeProvider theme={theme}>{children}</SC.ThemeProvider>
			</React.Fragment>
		);
	}
}
