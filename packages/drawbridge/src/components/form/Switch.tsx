import React, {ReactNode} from "react";
import SwitchStyled from "./styled/switch/SwitchStyled";

interface Props {
    children?: ReactNode,
    className?: string
}

const Switch: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className} = props;

    return (
        <SwitchStyled className={className}>
            {children}
        </SwitchStyled>
    )
}

export default Switch;
