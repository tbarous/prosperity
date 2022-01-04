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

const DefaultCheckbox = (args: any) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(args.checked)
    }, [args.checked])

    return (
        <StorybookWrapperStyled>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <Checkbox
                            onChange={() => setChecked(!checked)}
                            checked={checked}
                            label={args.label}
                        />
                    </Col>
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