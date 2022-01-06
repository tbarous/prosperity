import React from "react";
import { BasicComponentProps } from "../../typings/index";
import { useMountChildProps } from "../../hooks/useMountChild";
export declare enum SnackbarVariationEnum {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}
export interface SnackbarMapping {
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
}
export interface SnackbarProps extends BasicComponentProps, useMountChildProps, SnackbarMapping {
    dismissible?: boolean;
    closeOnDelay?: number;
}
declare const Snackbar: React.FunctionComponent<SnackbarProps>;
export default Snackbar;
