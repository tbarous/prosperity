import { ReactElement, ReactNode } from "react";
import ThemeInterface from "../theme/interfaces/ThemeInterface";
export declare type ReactElementOrNull = ReactElement | null;
export declare type BasicComponentProps = {
    children?: ReactNode;
    className?: string;
};
export declare type StyledProps = {
    theme: ThemeInterface;
};
export declare type StyledRule = <T extends ThemeInterface>(props: T) => string;
export declare type FunctionVoid = () => void;
export declare type useMountChildStyledProps = {
    mount?: boolean;
    entryDelay: number;
    exitDelay: number;
};
export declare type TooltipTrigger = {
    tooltip?: any;
};
