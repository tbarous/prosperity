import React, {ReactNode} from "react";
import styled from "styled-components";

const ListStyled = styled.ul`
    padding: 0;
    margin: 0;
`;

interface Props {
    children?: ReactNode,
    className?: string
}

const List: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className} = props;

    return (
        <ListStyled className={className}>
            {children}
        </ListStyled>
    )
}

export default List;