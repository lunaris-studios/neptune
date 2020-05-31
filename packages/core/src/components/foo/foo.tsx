import * as React from "react";

interface IFooProps {
	bar: string;
}

const defaultProps: IFooProps = Object.freeze<IFooProps>({
	bar: "foo",
});

class Foo extends React.PureComponent<IFooProps> {
	static readonly defaultProps: IFooProps = defaultProps;
	public render() {
		return null;
	}
}

const Bar = () => <Foo />;
