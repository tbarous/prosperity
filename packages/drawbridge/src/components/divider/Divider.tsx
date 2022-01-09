import React, {FunctionComponent, ReactElement} from "react";
import DividerStyled from "./styled/DividerStyled";

export interface DividerProps {
    className?: string,
    spacing?: number,
    vertical?: boolean
}

const Divider: FunctionComponent<DividerProps> = (props: DividerProps): ReactElement => {
    const {className, spacing, vertical} = props;

    return <DividerStyled className={className} spacing={spacing} vertical={vertical}/>;
}

export default Divider;