import React, {useEffect, useState} from "react";
import Input from "@components/form/Input";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Checkbox from "@components/form/Checkbox";
import Radio from "@components/form/Radio";
import styled from "styled-components";
import Divider from "@components/divider/Divider";

const RadioWrapper = styled(Col)`
  display: flex;
  align-items: center;
`

const DefaultRadio = (args: any) => {
    const [checked, setChecked] = useState(2);

    useEffect(() => {
        setChecked(args.checked)
    }, [args.checked])

    return (
        <Container fluid>
            <Row>
                <RadioWrapper xs={4}>
                    <Radio
                        disabled
                        onChange={() => setChecked(1)}
                        checked={checked === 1}
                        label={args.label}
                    />
                </RadioWrapper>
            </Row>

            <Row>
                <Divider spacing={20}/>
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
    );
}

DefaultRadio.args = {
    label: "Label",
    checked: 2
};

export default DefaultRadio;