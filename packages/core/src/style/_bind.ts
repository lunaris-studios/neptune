import * as SC from "styled-components";

import * as Redux from "~/redux";

/** Binds */
export enum Bind {
	DEVICE = "device",
	MODE = "mode",
}

type ThemeState = Redux.Reducers.Theme.State;
type ThemeProps = SC.ThemeProps<ThemeState>;

type BindOptions<N extends Bind> = ThemeState["binds"][N];
type BindValueResult =
	| string
	| SC.FlattenInterpolation<SC.ThemeProps<any>>
	| SC.FlattenInterpolation<SC.ThemedStyledProps<any, any>>;
type BindValueFn = (props: object) => BindValueResult;
type BindValue = BindValueFn | BindValueResult;

type BindMap<N extends Bind> = Record<BindOptions<N>, BindValue>;
type VariantMap<N extends Bind> = Record<string, BindMap<N>>;

type BindSet = ReturnType<typeof bind>;
type VariantSet = ReturnType<typeof bind.variants>;
export type AnyBindSet = BindSet | VariantSet;

function getBindValue(name: string, props: ThemeProps, values: any) {
	const value = props.theme && props.theme.binds && props.theme.binds[name];

	let themeValue;

	if (typeof value === "function") {
		themeValue = value(values);
	} else {
		themeValue = values[value];
	}

	if (typeof themeValue === "function") {
		return themeValue(props);
	} else {
		return themeValue;
	}
}

/** */
export function bind<N extends Bind>(name: N, values: BindMap<N>) {
	return function (props: ThemeProps) {
		return getBindValue(name, props, values);
	};
}

/** */
bind.variants = function <N extends Bind>(name: N, prop: string, values: VariantMap<N>) {
	return function (props: ThemeProps) {
		const variant = props[prop] && values[props[prop]];
		if (!variant) {
			// TODO: move error to `_errors.ts`
			throw new Error("Variant does not exist.");
		}

		const value = getBindValue(name, props, variant);

		return value;
	};
};
