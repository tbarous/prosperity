import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";
import SnackbarCloseStyled from "@components/snackbar/styled/snackbar-close/SnackbarCloseStyled";
import SnackbarStyled from "@components/snackbar/styled/snackbar/SnackbarStyled";
import {Times} from "@components/icon/Icons";
import {useMountChildProps} from "@hooks/useMountChild";
import useCallbackOnTimeout from "@hooks/useCallbackOnTimeout";

export interface SnackbarProps extends BasicComponentProps, useMountChildProps {
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
        unmountComponent,
        mount,
        entryDelay,
        exitDelay
    } = props;

    if (closeOnDelay) useCallbackOnTimeout(closeOnDelay, () => unmountComponent(true));

    return (
        <SnackbarStyled
            className={className}
            variation={variation}
            mount={mount}
            entryDelay={entryDelay}
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