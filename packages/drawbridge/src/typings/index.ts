import {ReactElement, ReactNode} from "react";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

export type ReactElementOrNull = ReactElement | null
export type BasicComponentProps = { children?: ReactNode, className?: string }
export type StyledProps = { theme: ThemeInterface };
export type StyledRule = <T extends ThemeInterface>(props: T) => string
export type FunctionVoid = () => void;
export type useMountChildStyledProps = { mount?: boolean, entryDelay?: number, exitDelay: number };
export type TooltipTrigger = {tooltip?: any}