import React, {FormEvent, ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import FormStyled from "@components/form/styled/FormStyled";

interface Props extends BasicComponentProps {
    onSubmit?: () => void
}

const Form: React.FunctionComponent<Props> = (props: Props): ReactElement => {
    const {
        children,
        className,
        onSubmit
    } = props;

    function onSubmitHandler(e: FormEvent) {
        e.preventDefault();

        onSubmit && onSubmit();
    }

    return (
        <FormStyled onSubmit={onSubmitHandler} className={className}>
            {children}
        </FormStyled>
    )
}

export default Form;