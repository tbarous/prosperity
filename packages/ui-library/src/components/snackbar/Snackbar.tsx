import React, {ReactNode} from "react";
import SnackBarStyled from "./styled/SnackbarStyled";
import {BasicComponentProps, ReactElementOrNull} from "@typings";

export enum Variation {
    Success = "success",
    Warning = "warning",
    Danger = "danger"
}

interface Props extends BasicComponentProps {
    variation: Variation
}

const Snackbar: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, className} = props;

    return (
        <SnackBarStyled {...props}>
            {children}
        </SnackBarStyled>
    )
}

export default Snackbar;