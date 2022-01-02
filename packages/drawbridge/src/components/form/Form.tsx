import React, {FormEvent, ReactElement, ReactNode} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import FormStyled from "@components/form/styled/form/FormStyled";

interface Props extends BasicComponentProps {
    onSubmit?: () => void
}

const Form: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
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