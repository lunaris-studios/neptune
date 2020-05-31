import * as Polished from "polished";
import * as Protocol from "@nucleus/protocol";
import * as React from "react";
import * as Testing from "@testing-library/react";

import * as BIN from "~/bin";

import { Spinner } from "./spinner";

// @ts-ignore
import { find } from "styled-components/test-utils";

describe("Spinner", () => {
	const wrapper = (props: BIN.INucleusProviderProps = BIN.NucleusProvider.defaultProps) => {
		return Testing.render(<BIN.NucleusProvider {...props} />);
	};

	it("renders correctly", () => {
		const node = wrapper();
		const SpinnerContainer = find(node.baseElement, Spinner.Styled.Spinner.Container);
		expect(SpinnerContainer).toMatchSnapshot();
	});

	it("overflows out of bounds value", () => {});

	it("uses dark colors when <Scheme.DARK> mode is enabled", () => {
		const node = wrapper({ theme: { binds: { scheme: Protocol.Scheme.DARK } } });
		const SpinnerSVGPathHead = find(node.baseElement, Spinner.Styled.Spinner.SVG.Path.Head);
		expect(SpinnerSVGPathHead).toHaveStyleRule("stroke", Protocol.Color.BLACK_4);
	});

	it("uses light colors when <Scheme.LIGHT> mode is enabled", () => {
		const node = wrapper({ theme: { binds: { scheme: Protocol.Scheme.LIGHT } } });
		const SpinnerSVGPathHead = find(node.baseElement, Spinner.Styled.Spinner.SVG.Path.Head);
		expect(SpinnerSVGPathHead).toHaveStyle("stroke", Protocol.Color.BLACK_2);
	});
});
