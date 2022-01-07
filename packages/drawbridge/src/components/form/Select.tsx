import React, {ReactNode} from "react";
import styled from "styled-components";

const SelectStyled = styled.div`
    
`;

interface Props {
    children?: ReactNode,
    className?: string
}

const Select: React.FunctionComponent<Props> = (props: Props): React.ReactElement => {
    const {children, className} = props;

    return (
        <SelectStyled className={className}>
            {children}
        </SelectStyled>
    )
}

export default Select;