import React, {ReactNode} from "react";
import DividerStyled from "./styled/DividerStyled";

export interface DividerProps {
    className?: string,
    spacing?: number,
    vertical?: boolean
}

const Divider: React.FunctionComponent<DividerProps> = (props: DividerProps): React.ReactElement => {
    const {
        className,
        spacing = 16,
        vertical = false
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