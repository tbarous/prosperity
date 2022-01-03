import React, {useEffect, useRef, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";
import SnackbarCloseStyled from "@components/snackbar/styled/snackbar-close/SnackbarCloseStyled";
import SnackbarStyled from "@components/snackbar/styled/snackbar/SnackbarStyled";
import {Times} from "@components/icon/Icons";
import useUnmount, {useUnmountProps} from "@hooks/useUnmount";

export interface SnackbarProps extends BasicComponentProps, useUnmountProps {
    variation: SnackbarVariationEnum,
    dismissible?: boolean,
    closeOnDelay?: number
}

const Snackbar: React.FunctionComponent<SnackbarProps> = (props: SnackbarProps): ReactElementOrNull => {
    const {
        children,
        className,
        variation,
        dismissible,
        closeOnDelay,
        unmounting,
        onEndUnmount = () => {
        },
        onStartUnmount = () => {
        }
    } = props;

    useUnmount({delay: 800, unmounting, onEndUnmount});

    const timeoutCloseRef = useRef<any>(null);

    useEffect(() => {
        if (closeOnDelay) timeoutCloseRef.current = setTimeout(onStartUnmount, closeOnDelay)

        return () => clearTimeout(timeoutCloseRef.current);
    }, []);

    return (
        <SnackbarStyled
            className={className}
            variation={variation}
            unmounting={unmounting}
        >
            {children}

            {dismissible && <SnackbarCloseStyled
                onClick={onStartUnmount}
                icon={Times}
            />}
        </SnackbarStyled>
    )
}

export default Snackbar;