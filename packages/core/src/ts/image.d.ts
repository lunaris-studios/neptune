declare module "*.svg" {
	const src: string;
	const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export { ReactComponent };
	export default src;
}
