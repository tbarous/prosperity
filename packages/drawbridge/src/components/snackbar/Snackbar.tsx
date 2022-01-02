import React, {useEffect, useRef, useState} from "react";
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

    const timeoutCloseAnimationRef = useRef<any>(null);
    const timeoutCloseRef = useRef<any>(null);

    useEffect(() => {
        if (closeOnDelay) {
            timeoutCloseRef.current = setTimeout(() => setUnmounting(true), closeOnDelay);
        }

        return () => clearTimeout(timeoutCloseRef.current);
    }, []);

    useEffect(() => {
        if (unmounting) {
            timeoutCloseAnimationRef.current = setTimeout(() => onClose(), 500);
        }

        return () => clearTimeout(timeoutCloseAnimationRef.current);
    }, [unmounting])

    return (
        <SnackbarStyled
            className={className}
            variation={variation}
            unmounting={unmounting}
        >
            {children}

            {dismissible && <SnackbarCloseStyled
                onClick={() => setUnmounting(true)}
                icon={Times}
            />}
        </SnackbarStyled>
    )
}

export default Snackbar;