import React, {ReactElement} from "react";
import DividerStyled from "./styled/DividerStyled";

interface T {
    className?: string,
    spacing?: number,
    vertical?: boolean
}

const Divider: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        className,
        spacing,
        vertical
    } = props;

    return (
        <DividerStyled
            className={className}
            spacing={spacing}
            vertical={vertical}
        />
    )
}

export default Divider;