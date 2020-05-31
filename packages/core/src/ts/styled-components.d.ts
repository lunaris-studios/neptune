import * as Protocol from "@nucleus/protocol";

import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme extends Protocol.Theme {}
}
