import {ReactElement, ReactNode} from "react";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

export type ReactElementOrNull = ReactElement | null
export type BasicComponentProps = { children?: ReactNode, className?: string }
export type StyledProps = { theme: ThemeInterface };
