import React, {ReactElement, ReactNode} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import FormStyled from "./styled/FormStyled";

interface Props extends BasicComponentProps {
    onSubmit?: () => void
}

const Form: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, className, onSubmit} = props;

    function onSubmitHandler(e) {
        e.preventDefault();

        onSubmit && onSubmit();
    }

    return (
        <FormStyled onSubmit={onSubmitHandler}>
            {children}
        </FormStyled>
    )
}

export default Form;