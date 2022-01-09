import React, {ReactElement, ReactNode} from "react";
import {Times} from "@icons";
import useCallbackOnTimeout from "@hooks/useCallbackOnTimeout";
import SnackbarStyled from "@components/snackbar/styled/SnackbarStyled";
import SnackbarCloseStyled from "@components/snackbar/styled/SnackbarCloseStyled";
import {useTheme} from "styled-components";
import useUnmount from "@hooks/useUnmount";

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
    onUnmounted: () => void,
    unmount: boolean
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
        onUnmounted,
        unmount
    } = props;

    const delay = useTheme().animation.snackbar;

    const {startUnmount, myUnmount} = useUnmount(unmount, onUnmounted, delay);

    if (closeOnDelay) {
        useCallbackOnTimeout(closeOnDelay + (delay * 2), startUnmount);
    }

    return (
        <SnackbarStyled
            className={className}
            success={success}
            warning={warning}
            danger={danger}
            unmount={myUnmount}
        >
            {children}

            {dismissible && <SnackbarCloseStyled
                onClick={startUnmount}
                icon={Times}
            />}
        </SnackbarStyled>
    )
}

export default Snackbar;