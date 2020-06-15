import * as Protocol from "@neptune/protocol";

import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme extends Protocol.Theme {}
}
