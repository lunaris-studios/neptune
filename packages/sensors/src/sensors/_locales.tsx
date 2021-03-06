import * as React from "react";
import * as Universal from "@lunaris/paradigm-universal";

import * as TS from "~/ts";

export interface ILocaleSensorProps
	extends Universal.UniversalProps<ILocaleSensorState>,
		TS.ISensorProps {}

export interface ILocaleSensorState {
	locale: string;
}

const defaultProps = Object.freeze<ILocaleSensorProps>({
	throttle: 100,
});

const defaultState = Object.freeze<ILocaleSensorState>({
	locale: preferredLocales(),
});

/**
 * TypeScript's definitions don't include this, though it has decent support in
 * modern browsers.
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
 */
declare namespace Intl {
	function getCanonicalLocales(locale: readonly string[]): string[];
}

function preferredLocales(): string {
	if (navigator.languages && navigator.languages.length > 0) {
		return Intl.getCanonicalLocales(navigator.languages)[0];
	}
	return Intl.getCanonicalLocales([navigator.language])[0];
}

export class LocaleSensor extends React.Component<
	ILocaleSensorProps,
	ILocaleSensorState
> {
	public static displayName = "Sensor[LocaleSensor]";

	constructor(props: ILocaleSensorProps) {
		super(props);
	}

	static readonly defaultProps: ILocaleSensorProps = defaultProps;
	static readonly defaultState: ILocaleSensorState = defaultState;
	readonly state: ILocaleSensorState = { locale: this.preferredLocales() };

	private unmounted: boolean = false;

	public componentDidMount() {
		this.bindEvents();
	}

	public componentWillUnmount() {
		this.unmounted = true;
		this.unbindEvents();
	}

	private bindEvents() {
		window.addEventListener("languagechange", this.handleLanguageChange);
	}

	private unbindEvents() {
		window.removeEventListener("languagechange", this.handleLanguageChange);
	}

	preferredLocales(): string {
		if (navigator.languages && navigator.languages.length > 0) {
			return Intl.getCanonicalLocales(navigator.languages)[0];
		}
		return Intl.getCanonicalLocales([navigator.language])[0];
	}

	private handleLanguageChange() {
		if (this.unmounted) {
			return;
		}

		this.setState({
			locale: preferredLocales(),
		});
	}

	public render() {
		return Universal.render(this.props, this.state);
	}
}

export const withLocale = Universal.createEnhancer(LocaleSensor, "sensors", "locale");
