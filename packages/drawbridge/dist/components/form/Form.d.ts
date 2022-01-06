import React from "react";
import { BasicComponentProps } from "../../typings/index";
interface Props extends BasicComponentProps {
    onSubmit?: () => void;
}
declare const Form: React.FunctionComponent<Props>;
export default Form;
