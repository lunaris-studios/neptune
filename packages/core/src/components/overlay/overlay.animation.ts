import * as Spring from "react-spring";

import * as Common from "~/common";
import * as Util from "~/util";

import * as Component from "./overlay";

export enum Type {
	CONTAINER_TRANSITION = "CONTAINER_TRANSITION",
}

export interface IContainerTransition {
	opacity: number;
	transform: string;
}

export interface IContainerTransitionOptions extends Component.IOverlayProps, Component.IOverlayLifecycleProps {}

const defaultContainerTransition = Object.freeze<IContainerTransition>({
	opacity: 0,
	transform: "translate3d(0%, -100%, 0%)",
});

export class Container {
	public controller: Spring.Controller = new Spring.Controller();

	public static defaultContainerTransition: IContainerTransition = defaultContainerTransition;

	public transitionProps(options: IContainerTransitionOptions) {
		const { isOpen, onClosing, onClosed, onOpening, onOpened } = options;

		const props: Spring.TransitionDefaultProps = Object.freeze({
			from: defaultContainerTransition,
			enter: () => async (next) => {
				await next({
					opacity: 1,
					transform: "translate3d(100%, 0%, 0%)",
				});
			},
			leave: () => async (next) => {
				await next({
					opacity: 0,
					transform: "translate3d(100%, 0%, 0%)",
				});
			},
			onStart: () => (isOpen ? Util.isFunction(onOpening) && onOpening() : Util.isFunction(onClosing) && onClosing()),
			onRest: () => (isOpen ? Util.isFunction(onOpened) && onOpened() : Util.isFunction(onClosed) && onClosed()),
		});

		return props;
	}
}
