import React, {ReactNode} from "react";
import TabsStyled from "./styled/TabsStyled";

interface Props {
    children?: ReactNode,
    className?: string
}

const Tabs: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className} = props;

    return (
        <TabsStyled {...props}>
            {children}
        </TabsStyled>
    )
}

export default Tabs;