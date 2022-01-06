import React, {useEffect, useState} from "react";
import Input from "@components/form/Input";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Checkbox from "@components/form/Checkbox";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const CheckboxWrapper = styled(Col)`
  display: flex;
  align-items: center;
`

const DefaultCheckbox = (args: any) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(args.checked)
    }, [args.checked])

    return (
        <StorybookWrapperStyled>
            <Container fluid>
                <Row>
                    <CheckboxWrapper xs={4}>
                        <Checkbox
                            onChange={() => setChecked(!checked)}
                            checked={checked}
                            label={args.label}
                        />
                    </CheckboxWrapper>
                </Row>
            </Container>
        </StorybookWrapperStyled>
    )
}

DefaultCheckbox.args = {
    label: "Label",
    checked: false
};

export default DefaultCheckbox;