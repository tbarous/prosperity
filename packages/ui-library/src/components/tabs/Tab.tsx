import React, {ReactNode} from "react";
import TabStyled from "./styled/TabStyled";
import {BasicComponentProps} from "@typings";

interface Props extends BasicComponentProps{
    active?: boolean
}

const Tab: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className, active} = props;
    
    return (
        <TabStyled {...props}>
            {children}
        </TabStyled>
    )
}

export default Tab;