import React, {ReactNode} from "react";
import DividerStyled from "./styled/DividerStyled";

interface Props {
    children?: ReactNode,
    className?: string
}

const Divider: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className} = props;

    return (
        <DividerStyled className={className}>
            {children}
        </DividerStyled>
    )
}

export default Divider;