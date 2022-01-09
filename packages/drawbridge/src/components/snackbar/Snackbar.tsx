import React from "react";
import {Times} from "@icons";
import useCallbackOnTimeout from "@hooks/useCallbackOnTimeout";
import SnackbarStyled from "@components/snackbar/styled/SnackbarStyled";
import SnackbarCloseStyled from "@components/snackbar/styled/SnackbarCloseStyled";
import {useTheme} from "styled-components";
import useTransition from "@hooks/useTransition";
import {BasicComponentProps, ReactElementOrNull} from "@typings";

export enum SnackbarVariations {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}

export interface SnackbarUIProps {
    danger?: boolean,
    warning?: boolean,
    success?: boolean,
}

export interface SnackbarProps extends BasicComponentProps, SnackbarUIProps {
    dismissible?: boolean,
    closeOnDelay?: number,
    display?: boolean,
    onStopDisplay: () => void
}

const Snackbar: React.FunctionComponent<SnackbarProps> = (props: SnackbarProps): ReactElementOrNull => {
    const {children, className, success, warning, danger, dismissible, closeOnDelay, display, onStopDisplay} = props;

    const UIProps = {success, warning, danger};

    const {remove, transition} = useTransition(useTheme().animation.snackbar, onStopDisplay);

    if (closeOnDelay) useCallbackOnTimeout(closeOnDelay, remove);

    if (!display) return null;

    return (
        <SnackbarStyled className={className} transition={transition} {...UIProps}>
            {children}

            {dismissible && <SnackbarCloseStyled onClick={remove} icon={Times} {...UIProps} />}
        </SnackbarStyled>
    )
}

export default Snackbar;