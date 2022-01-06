import { FunctionVoid } from "../typings/index";
export interface useMountChildProps {
    render: boolean;
    mount: boolean;
    entryDelay: number;
    exitDelay: number;
    unmountComponent: (override?: boolean) => void;
    renderComponent: FunctionVoid;
    toggle: FunctionVoid;
}
/**
 * Controls the behavior of a child component.
 * Mostly useful to separate the appearance of a
 * child component in the DOM and the actual appearance of it on a
 * page. To achieve this 2 state variables are used, render and mount.
 * The operations that are automatically happening are:
 * [RENDER] -> [MOUNT]
 * [UNMOUNT] -> [UNRENDER]
 */
declare function useMountChild(entryDelay?: number, exitDelay?: number): useMountChildProps;
export default useMountChild;
