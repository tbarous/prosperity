import React, {useEffect, useRef, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";
import SnackbarCloseStyled from "@components/snackbar/styled/snackbar-close/SnackbarCloseStyled";
import SnackbarStyled from "@components/snackbar/styled/snackbar/SnackbarStyled";
import {Times} from "@components/icon/Icons";
import useMount, {useMountProps} from "@hooks/useMount";
import {emptyFunction} from "../../helpers/Helpers";
import useUnmountOnTimeout from "@hooks/useUnmountOnTimeout";

export interface SnackbarProps extends BasicComponentProps, useMountProps {
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
        mount,
        delay,
        unmountComponent = emptyFunction,
        onMounted = emptyFunction,
        onUnmounted = emptyFunction
    } = props;

    useMount({delay, mount, onMounted, onUnmounted});

    if (closeOnDelay) useUnmountOnTimeout(closeOnDelay, unmountComponent);

    return (
        <SnackbarStyled
            className={className}
            variation={variation}
            mount={mount}
            delay={delay}
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