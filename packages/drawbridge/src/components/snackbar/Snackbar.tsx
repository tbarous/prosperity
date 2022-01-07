import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import {Times} from "@icons";
import {useMountChildProps} from "@hooks/useMountChild";
import useCallbackOnTimeout from "@hooks/useCallbackOnTimeout";
import SnackbarStyled from "@components/snackbar/styled/SnackbarStyled";
import SnackbarCloseStyled from "@components/snackbar/styled/SnackbarCloseStyled";

export enum SnackbarVariationEnum {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}

export interface SnackbarMapping {
    danger?: boolean,
    warning?: boolean,
    success?: boolean
}

export interface SnackbarProps extends BasicComponentProps, useMountChildProps, SnackbarMapping {
    dismissible?: boolean,
    closeOnDelay?: number
}

const Snackbar: React.FunctionComponent<SnackbarProps> = (props: SnackbarProps): ReactElementOrNull => {
    const {
        children,
        className,
        success,
        warning,
        danger,
        dismissible,
        closeOnDelay,
        unmountComponent,
        mount,
        exitDelay
    } = props;

    if (closeOnDelay) useCallbackOnTimeout(closeOnDelay, () => unmountComponent(true));

    return (
        <SnackbarStyled
            className={className}
            success={success}
            warning={warning}
            danger={danger}
            mount={mount}
            exitDelay={exitDelay}
        >
            {children}

            {dismissible && <SnackbarCloseStyled
                onClick={unmountComponent}
                icon={Times}
            />}
        </SnackbarStyled>
    )
}

export default Snackbar;