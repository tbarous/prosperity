import React, {ReactElement, ReactNode} from "react";
import TabStyled from "@components/tabs/styled/TabStyled";

interface T {
    children: ReactNode,
    className?: string,
    onClickTab?: (e: MouseEvent) => void
}

const Tab: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        className,
        onClickTab
    } = props;

    return (
        <TabStyled
            className={className}
            onClick={onClickTab}
        >
            {children}
        </TabStyled>
    )
}

export default Tab;