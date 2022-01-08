import React, {useEffect, useState} from "react";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Checkbox from "@components/form/Checkbox";

const DefaultCheckbox = (args: { disabled?: boolean, checked?: boolean, label?: string }) => {
    const [checked, setChecked] = useState<boolean | undefined>(false);

    useEffect(() => setChecked(args.checked), [args.checked])

    return (
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <Checkbox
                        onChange={() => setChecked(!checked)}
                        checked={checked}
                        label={args.label}
                        disabled={args.disabled}
                    />
                </Col>
            </Row>
        </Container>
    )
}

DefaultCheckbox.args = {
    label: "Label",
    checked: false,
    disabled: false
};

export default DefaultCheckbox;