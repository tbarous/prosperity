import React, {useState} from 'react';
import styled from "styled-components";
import StorybookWrapper from "../StorybookWrapper";
import Modal from "@components/modal/Modal";
import Col from "@components/grid/Col";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Button from "@components/button/Button";
import ModalHeader from "@components/modal/ModalHeader";
import ModalBody from "@components/modal/ModalBody";
import ModalFooter from "@components/modal/ModalFooter";

export default {
    title: 'Modal',
    component: Modal,
    argTypes: {
        container: {
            options: ['default', 'fluid'],
            control: {type: 'radio'},
        },
    },
};

const StyledCol = styled(Col)`
  border: 1px solid;
  background-color: cyan;
  padding: 1rem;
`;

const StyledModalHeader = styled(ModalHeader)`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const StyledModalBody = styled(ModalBody)`
  padding: 2rem 1rem;
`;

const ModalTemplate = (args: any) => {
    const [modal, setModal] = useState(false);

    return (
        <StorybookWrapper>
            <Button onClick={() => setModal(true)}>
                Toggle Modal
            </Button>

            {modal ?
                <Modal closeOnClickOutside onClose={() => setModal(false)}>
                    <StyledModalHeader>
                        Header
                    </StyledModalHeader>

                    <StyledModalBody>
                        <Container>
                            <Row>
                                <StyledCol xs={1}>1 1/4 Column</StyledCol>
                                <StyledCol xs={1}>1 1/4 Column</StyledCol>
                                <StyledCol xs={1}>1 1/4 Column</StyledCol>
                                <StyledCol xs={1}>1 1/4 Column</StyledCol>
                            </Row>

                            <br/>

                            <Row>
                                <StyledCol sm={12} lg={6}>Half LG | Full SM</StyledCol>
                                <StyledCol sm={12} lg={6}>Half LG | Full SM</StyledCol>
                            </Row>
                        </Container>
                    </StyledModalBody>

                    <ModalFooter>
                        Footer
                    </ModalFooter>
                </Modal>
                : null}
        </StorybookWrapper>
    )
};

export const Default: any = ModalTemplate.bind({});

Default.args = {
    container: 'default'
};