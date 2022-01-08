import React, {ReactElement, ReactNode} from "react";
import {Times} from "@icons";
import useCallbackOnTimeout from "@hooks/useCallbackOnTimeout";
import SnackbarStyled from "@components/snackbar/styled/SnackbarStyled";
import SnackbarCloseStyled from "@components/snackbar/styled/SnackbarCloseStyled";

export enum SnackbarVariations {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}

interface T {
    children: ReactNode,
    className?: string,
    dismissible?: boolean,
    closeOnDelay?: number,
    danger?: boolean,
    warning?: boolean,
    success?: boolean,
    mount?: boolean,
    unmountComponent: (override?: boolean) => void
}

const Snackbar: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        className,
        success,
        warning,
        danger,
        dismissible,
        closeOnDelay,
        unmountComponent,
        mount
    } = props;

    if (closeOnDelay) {
        useCallbackOnTimeout(closeOnDelay, () => unmountComponent(true));
    }

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