import React, {FormEvent, ReactElement, ReactNode} from "react";
import FormStyled from "./styled/form/FormStyled";

interface T {
    children: ReactNode,
    className?: string,
    onSubmit?: () => void
}

const Form: React.FunctionComponent<T> = (props: T): ReactElement => {
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
        <FormStyled
            onSubmit={onSubmitHandler}
            className={className}
        >
            {children}
        </FormStyled>
    )
}

export default Form;