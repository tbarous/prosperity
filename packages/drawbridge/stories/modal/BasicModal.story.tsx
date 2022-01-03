import React from "react";
import {useState} from "react";
import {
    StorybookButtonWrapper,
    StyledModalHeader,
    StyledModalBody,
    StorybookColContent
} from "@stories/GenericStyledComponents";
import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import ModalFooter from "@components/modal/ModalFooter";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import useMountChild from "@hooks/useMountChild";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

export const StorybookWrapperStyled = styled(StorybookWrapper)`
  font-family: OpenSans, serif;
  height: 100%;
`;

const BasicModal = (args: any) => {
    const [
        render,
        mount,
        mountComponent,
        unmountComponent,
        onMounted,
        onUnmounted,
        toggleChildMount
    ] = useMountChild();

    return (
        <StorybookWrapperStyled>
            <StorybookButtonWrapper>
                <Button onClick={toggleChildMount}>
                    Toggle Modal
                </Button>
            </StorybookButtonWrapper>

            {render ?
                <Modal
                    closeOnClickOutside
                    mountComponent={mountComponent}
                    unmountComponent={unmountComponent}
                    onMounted={onMounted}
                    onUnmounted={onUnmounted}
                    mount={mount}
                    delay={1000}
                >
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

                            <br/>

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

export default BasicModal;

