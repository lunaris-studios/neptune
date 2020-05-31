import * as Protocol from "@nucleus/protocol";
import * as React from "react";
import * as Testing from "@testing-library/react";

import * as BIN from "~/bin";

/**
 * Wrapper for testing shimmed changes for the <NucleusProvider>
 */
export function wrapper(ui: React.ReactElement, shimmedBinds?: Partial<Protocol.Theme["binds"]>) {
	const binds = Object.freeze<Protocol.Theme["binds"]>({
		...BIN.NucleusProvider.defaultProps.theme.binds,
		...shimmedBinds,
	});

	const theme = Object.freeze<Protocol.Theme>({
		...BIN.NucleusProvider.defaultProps.theme,
		binds,
	});

	function Wrapper(props: any) {
		const { children } = props;
		return <BIN.NucleusProvider theme={theme}>{children}</BIN.NucleusProvider>;
	}

	return Testing.render(ui, { wrapper: Wrapper });
}
