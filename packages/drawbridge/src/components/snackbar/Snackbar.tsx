import React, {ReactElement, ReactNode, useEffect, useRef, useState} from "react";
import {Times} from "@icons";
import useCallbackOnTimeout from "@hooks/useCallbackOnTimeout";
import SnackbarStyled from "@components/snackbar/styled/SnackbarStyled";
import SnackbarCloseStyled from "@components/snackbar/styled/SnackbarCloseStyled";
import {useTheme} from "styled-components";

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
    onUnmounted?: () => void,
    unmount?: boolean
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

    const ref = useRef<any>(null);
    const [myUnmount, setMyUnmount] = useState(true)
    const theme = useTheme()

    useEffect(() => {
        if (unmount) {
            startUnmount()
        } else {
            setMyUnmount(false)
        }
    }, [unmount])

    useEffect(() => {
        if (myUnmount) {
            ref.current = setTimeout(() => onUnmounted && onUnmounted(), theme.animation.snackbar)
        }

        return () => clearTimeout(ref.current)
    }, [myUnmount])

    if (closeOnDelay) {
        useCallbackOnTimeout(closeOnDelay + theme.animation.snackbar * 2, startUnmount);
    }

    function startUnmount() {
        setMyUnmount(true);
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