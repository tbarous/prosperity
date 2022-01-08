import React, {useEffect, useState} from "react";
import Input from "@components/form/Input";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Checkbox from "@components/form/Checkbox";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import Switch from "@components/form/Switch";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const CheckboxWrapper = styled(Col)`
  display: flex;
  align-items: center;
`

const DefaultSwitch = (args: { active?: boolean }) => {
    const [active, setActive] = useState<boolean | undefined>(false);

    useEffect(() => {
        setActive(args.active)
    }, [args.active])

    return (
        <StorybookWrapperStyled>
            <Container fluid>
                <Row>
                    <CheckboxWrapper xs={4}>
                        <Switch active={active} onChange={() => setActive(!active)}
                            // onChange={() => setChecked(!checked)}
                            // checked={checked}
                            // label={args.label}
                            // disabled={args.disabled}
                        />
                    </CheckboxWrapper>
                </Row>
            </Container>
        </StorybookWrapperStyled>
    )
}

DefaultSwitch.args = {
    label: "Label",
    active: false
};

export default DefaultSwitch;