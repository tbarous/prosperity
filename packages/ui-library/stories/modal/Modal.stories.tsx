import React, {useState} from 'react';
import styled from "styled-components";
import {
    StorybookButtonWrapper,
    StorybookColContent,
    StorybookWrapperStyled
} from "@stories/GenericComponents";
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
        <StorybookWrapperStyled>
            <StorybookButtonWrapper>
                <Button onClick={() => setModal(true)}>
                    Toggle Modal
                </Button>
            </StorybookButtonWrapper>

            {modal ?
                <Modal closeOnClickOutside onClose={() => setModal(false)}>
                    <StyledModalHeader>
                        Header
                    </StyledModalHeader>

                    <StyledModalBody>
                        <Container>
                            <Row gutter={12}>
                                <Col xs={6}>
                                    <StorybookColContent>1/12</StorybookColContent>
                                </Col>
                                <Col xs={6}>
                                    <StorybookColContent>1/12</StorybookColContent>
                                </Col>
                            </Row>
                        </Container>
                    </StyledModalBody>

                    <ModalFooter>
                        Footer
                    </ModalFooter>
                </Modal>
                : null}
        </StorybookWrapperStyled>
    )
};

const AuthModalTemplate = (args: any) => {
    const [modal, setModal] = useState(false);

    return (
        <StorybookWrapperStyled>
            <StorybookButtonWrapper>
                <Button onClick={() => setModal(true)}>
                    Login/Register
                </Button>
            </StorybookButtonWrapper>

            {modal ?
                <Modal closeOnClickOutside onClose={() => setModal(false)}>
                    <StyledModalHeader>
                        Header
                    </StyledModalHeader>

                    <StyledModalBody>
                        <Container>
                            <Row gutter={12}>
                                <Col xs={6}>
                                    <StorybookColContent>1/12</StorybookColContent>
                                </Col>
                                <Col xs={6}>
                                    <StorybookColContent>1/12</StorybookColContent>
                                </Col>
                            </Row>
                        </Container>
                    </StyledModalBody>

                    <ModalFooter>
                        Footer
                    </ModalFooter>
                </Modal>
                : null}
        </StorybookWrapperStyled>
    )
};

export const Default: any = ModalTemplate.bind({});
export const Auth: any = AuthModalTemplate.bind({});

Default.args = {
    container: 'default'
};