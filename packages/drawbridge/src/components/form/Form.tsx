import React, {FormEvent, FunctionComponent, ReactElement, ReactNode} from "react";
import FormStyled from "./styled/form/FormStyled";
import {BasicComponentProps} from "@typings";

interface FormProps extends BasicComponentProps {
    onSubmit?: () => void
}

const Form: FunctionComponent<FormProps> = (props: FormProps): ReactElement => {
    const {children, className, onSubmit} = props;

    function submit(e: FormEvent) {
        e.preventDefault();

        onSubmit && onSubmit();
    }

    return (
        <FormStyled onSubmit={submit} className={className}>
            {children}
        </FormStyled>
    )
}

export default Form;