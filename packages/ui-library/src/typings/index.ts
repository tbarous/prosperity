import React, {ReactElement, ReactNode} from "react";
import Theme from "@theme/interfaces";

export type ReactElementOrNull = ReactElement | null

export type BasicComponentProps = { children?: ReactNode, className?: string }

export type StyledProps = { theme: Theme };