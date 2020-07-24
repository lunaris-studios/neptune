import * as Util from "@lunaris/paradigm-util";

import * as TS from "~/ts";

/**
 * Composes higher-order enhancer components, resulting in a composite HOC
 * maintaing type assurance for `n` number of enhancers.
 */
export interface Compose {
	<TTargetProps extends object, TEnhancedProps extends object>(): TS.UniversalEnhancer<
		TTargetProps,
		TEnhancedProps
	>;

	<TTargetProps1 extends object, TEnhancedProps1 extends object>(
		e1: TS.UniversalEnhancer<TTargetProps1, TEnhancedProps1>,
	): TS.UniversalEnhancer<TTargetProps1, TEnhancedProps1>;

	<
		TTargetProps1 extends object,
		TEnhancedProps1 extends object,
		TTargetProps2 extends object,
		TEnhancedProps2 extends object
	>(
		e1: TS.UniversalEnhancer<TTargetProps1, TEnhancedProps1>,
		e2: TS.UniversalEnhancer<TTargetProps2, TEnhancedProps2>,
	): TS.UniversalEnhancer<
		TTargetProps1 & TTargetProps2,
		TEnhancedProps1 & TEnhancedProps2
	>;

	// <EP1 extends object, EP2 extends object>(
	// 	e1: TS.TUniversalEnhancer1<EP1>,
	// 	e2: TS.TUniversalEnhancer1<EP2>,
	// ): TS.TUniversalEnhancer1<EP1 & EP2>;

	// <S1 extends object, S2 extends object, S3 extends object>(
	// 	e1: TS.TUniversalEnhancer<S1>,
	// 	e2: TS.TUniversalEnhancer<S2>,
	// 	e3: TS.TUniversalEnhancer<S3>,
	// ): TS.TUniversalEnhancer<S1 & S2 & S3>;

	// <S1 extends object, S2 extends object, S3 extends object, S4 extends object>(
	// 	e1: TS.TUniversalEnhancer<S1>,
	// 	e2: TS.TUniversalEnhancer<S2>,
	// 	e3: TS.TUniversalEnhancer<S3>,
	// 	e4: TS.TUniversalEnhancer<S4>,
	// ): TS.TUniversalEnhancer<S1 & S2 & S3 & S4>;

	// <
	// 	S1 extends object,
	// 	S2 extends object,
	// 	S3 extends object,
	// 	S4 extends object,
	// 	S5 extends object
	// >(
	// 	e1: TS.TUniversalEnhancer<S1>,
	// 	e2: TS.TUniversalEnhancer<S2>,
	// 	e3: TS.TUniversalEnhancer<S3>,
	// 	e4: TS.TUniversalEnhancer<S4>,
	// 	e5: TS.TUniversalEnhancer<S5>,
	// ): TS.TUniversalEnhancer<S1 & S2 & S3 & S4 & S5>;

	// <
	// 	S1 extends object,
	// 	S2 extends object,
	// 	S3 extends object,
	// 	S4 extends object,
	// 	S5 extends object,
	// 	S6 extends object
	// >(
	// 	e1: TS.TUniversalEnhancer<S1>,
	// 	e2: TS.TUniversalEnhancer<S2>,
	// 	e3: TS.TUniversalEnhancer<S3>,
	// 	e4: TS.TUniversalEnhancer<S4>,
	// 	e5: TS.TUniversalEnhancer<S5>,
	// 	e6: TS.TUniversalEnhancer<S6>,
	// ): TS.TUniversalEnhancer<S1 & S2 & S3 & S4 & S5 & S6>;

	// <
	// 	S1 extends object,
	// 	S2 extends object,
	// 	S3 extends object,
	// 	S4 extends object,
	// 	S5 extends object,
	// 	S6 extends object,
	// 	S7 extends object
	// >(
	// 	e1: TS.TUniversalEnhancer<S1>,
	// 	e2: TS.TUniversalEnhancer<S2>,
	// 	e3: TS.TUniversalEnhancer<S3>,
	// 	e4: TS.TUniversalEnhancer<S4>,
	// 	e5: TS.TUniversalEnhancer<S5>,
	// 	e6: TS.TUniversalEnhancer<S6>,
	// 	e7: TS.TUniversalEnhancer<S7>,
	// ): TS.TUniversalEnhancer<S1 & S2 & S3 & S4 & S5 & S6 & S7>;

	// <
	// 	S1 extends object,
	// 	S2 extends object,
	// 	S3 extends object,
	// 	S4 extends object,
	// 	S5 extends object,
	// 	S6 extends object,
	// 	S7 extends object,
	// 	S8 extends object
	// >(
	// 	e1: TS.TUniversalEnhancer<S1>,
	// 	e2: TS.TUniversalEnhancer<S2>,
	// 	e3: TS.TUniversalEnhancer<S3>,
	// 	e4: TS.TUniversalEnhancer<S4>,
	// 	e5: TS.TUniversalEnhancer<S5>,
	// 	e6: TS.TUniversalEnhancer<S6>,
	// 	e7: TS.TUniversalEnhancer<S7>,
	// 	e8: TS.TUniversalEnhancer<S8>,
	// ): TS.TUniversalEnhancer<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8>;

	// <
	// 	S1 extends object,
	// 	S2 extends object,
	// 	S3 extends object,
	// 	S4 extends object,
	// 	S5 extends object,
	// 	S6 extends object,
	// 	S7 extends object,
	// 	S8 extends object,
	// 	S9 extends object
	// >(
	// 	e1: TS.TUniversalEnhancer<S1>,
	// 	e2: TS.TUniversalEnhancer<S2>,
	// 	e3: TS.TUniversalEnhancer<S3>,
	// 	e4: TS.TUniversalEnhancer<S4>,
	// 	e5: TS.TUniversalEnhancer<S5>,
	// 	e6: TS.TUniversalEnhancer<S6>,
	// 	e7: TS.TUniversalEnhancer<S7>,
	// 	e8: TS.TUniversalEnhancer<S8>,
	// 	e9: TS.TUniversalEnhancer<S9>,
	// ): TS.TUniversalEnhancer<S1 & S2 & S3 & S4 & S5 & S6 & S7 & S8 & S9>;

	(...args: TS.UniversalEnhancer<any, any>[]): TS.UniversalEnhancer<any, any>;
}

export const compose: Compose = (...sensors: any[]): any => {
	return sensors.reduce((prevEnhancer: any, currentEnhancer: any) => (...args: any) =>
		prevEnhancer(currentEnhancer(...args)),
	);
};
