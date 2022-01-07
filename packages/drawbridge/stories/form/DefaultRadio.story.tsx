import React, {useEffect, useState} from "react";
import Input from "@components/form/Input";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Checkbox from "@components/form/Checkbox";
import Radio from "@components/form/Radio";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import Divider from "@components/divider/Divider";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const RadioWrapper = styled(Col)`
  display: flex;
  align-items: center;
`

const DefaultRadio = (args: any) => {
    const [checked, setChecked] = useState(1);

    useEffect(() => {
        setChecked(args.checked)
    }, [args.checked])

    return (
        <StorybookWrapperStyled>
            <Container fluid>
                <Row>
                    <RadioWrapper xs={4}>
                        <Radio
                            onChange={() => setChecked(1)}
                            checked={checked === 1}
                            label={args.label}
                        />
                    </RadioWrapper>
                </Row>

                <Row>
                    <Divider spacing={10}/>
                </Row>

                <Row>
                    <RadioWrapper xs={4}>
                        <Radio
                            onChange={() => setChecked(2)}
                            checked={checked === 2}
                            label={args.label}
                        />
                    </RadioWrapper>
                </Row>
            </Container>
        </StorybookWrapperStyled>
    );
}

DefaultRadio.args = {
    label: "Label",
    checked: 1
};

export default DefaultRadio;