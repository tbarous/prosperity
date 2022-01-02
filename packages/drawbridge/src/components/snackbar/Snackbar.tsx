import React, {useEffect, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";
import SnackbarCloseStyled from "@components/snackbar/styled/snackbar-close/SnackbarCloseStyled";
import SnackbarStyled from "@components/snackbar/styled/snackbar/SnackbarStyled";
import {Times} from "@components/icon/Icons";

export interface SnackbarProps extends BasicComponentProps {
    variation: SnackbarVariationEnum,
    dismissible?: boolean,
    closeOnDelay?: number,
    onClose?: () => void
}

const Snackbar: React.FunctionComponent<SnackbarProps> = (props: SnackbarProps): ReactElementOrNull => {
    const {
        children,
        className,
        variation,
        dismissible,
        closeOnDelay,
        onClose = () => {
        }
    } = props;

    const [unmounting, setUnmounting] = useState(false);

    useEffect(() => {
        if (closeOnDelay) setTimeout(() => setUnmounting(true), closeOnDelay);
    }, []);

    useEffect(() => {
        if (unmounting) setTimeout(() => onClose(), closeOnDelay)
    }, [unmounting])

    return (
        <SnackbarStyled
            className={className}
            variation={variation}
            unmounting={unmounting}
        >
            {children}

            {dismissible && <SnackbarCloseStyled
                onClick={onClose}
                icon={Times}
            />}
        </SnackbarStyled>
    )
}

export default Snackbar;