import * as Protocol from "@lunaris/paradigm-protocol";

import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme extends Protocol.Theme {}
}
