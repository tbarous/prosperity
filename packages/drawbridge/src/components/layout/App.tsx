import React, {ReactNode} from "react";
import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  height: 100%;
`;

interface Props {
    children?: ReactNode,
    className?: string
}

const App: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className} = props;

    return (
        <AppStyled className={className}>
            {children}
        </AppStyled>
    )
}

export default App;