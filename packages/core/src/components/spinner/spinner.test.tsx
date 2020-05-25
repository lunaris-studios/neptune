import * as React from "react";
import * as Testing from "@testing-library/react";
import * as Polished from "polished";

import * as Common from "~/common";
import * as Gatsby from "~/gatsby";
import * as Redux from "~/redux";
import * as Style from "~/style";

import { Spinner } from "./spinner";

// @ts-ignore
import { find } from "styled-components/test-utils";

type WrapperProps = Partial<Redux.Reducers.Theme.State>;

describe("Spinner", () => {
	const wrapper = (props: WrapperProps = {}) => {
		const theme = Redux.Reducers.Theme.defaultState;
		const state = Object.assign({ theme }, props);
		const element = Gatsby.wrapRootElement({
			element: <Spinner />,
			defaultState: state,
		});

		return Testing.render(element);
	};

	it("renders correctly", () => {
		const node = wrapper();
		const SpinnerContainer = find(node.baseElement, Spinner.Styled.Spinner.Container);
		expect(SpinnerContainer).toMatchSnapshot();
	});

	it("overflows out of bounds value", () => {});

	it("uses dark colors when <Color.DARK> mode is enabled", () => {
		const node = wrapper({ binds: { [Style.Theme.MODE]: Style.Mode.LIGHT } });
		const SpinnerSVGPathHead = find(node.baseElement, Spinner.Styled.Spinner.SVG.Path.Head);
		expect(SpinnerSVGPathHead).toHaveStyleRule("stroke", Style.Color.BLACK_4);
	});

	it("uses light colors when <Color.LIGHT> mode is enabled", () => {
		const node = wrapper({ binds: { [Style.Theme.MODE]: Style.Mode.LIGHT } });
		const SpinnerSVGPathHead = find(node.baseElement, Spinner.Styled.Spinner.SVG.Path.Head);
		expect(SpinnerSVGPathHead).toHaveStyleRule("stroke", Style.Color.BLACK_2);
	});
});
