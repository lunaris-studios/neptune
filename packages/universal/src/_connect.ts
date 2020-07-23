import * as ReactRedux from "react-redux";

import { compose } from "./_compose";

import * as TS from "~/ts";

export interface Connect {
	<
		TReduxHOC,
		TReduxProps extends ReactRedux.ConnectedProps<TReduxHOC>,
		TUniversalHOC,
		TUniversalProps extends TS.UniversalEnhancerInjectedProps<TUniversalHOC>
	>(
		redux: TReduxHOC,
		universal: TUniversalHOC,
	): any;
}

/**
 * Compose explicit HOC types. Current support exists for:
 *
 * - `redux`:`<react-redux>.connect()`
 * - `universal`:`<@neptune/universal>.compose()`
 */
export const connect: Connect = (...args: any[]) => compose(...args);
