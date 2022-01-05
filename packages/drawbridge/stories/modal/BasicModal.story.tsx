import React, {useEffect} from "react";
import {useState} from "react";
import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import ModalFooter from "@components/modal/ModalFooter";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import useMountChild from "@hooks/useMountChild";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import ModalHeader from "@components/modal/ModalHeader";
import ModalBody from "@components/modal/ModalBody";
import {TextStyledProps} from "@components/text/styled/TextStyled";
import Text from "@components/text/Text";

export const StorybookColContent = styled(Text)<TextStyledProps>`
  background-color: ${(props: TextStyledProps) => props.theme.color.primary};
  padding: 1rem;
  text-align: center;
  color: white;
`;

export const StyledModalHeaderNoPadding = styled(ModalHeader)`
  display: flex;
  align-items: center;
`;

export const StyledModalHeader = styled(ModalHeader)`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const StyledModalBody = styled(ModalBody)`
  padding: 2rem 1rem;
`;
const StorybookButtonWrapper = styled.div`
  width: 150px;
`;

const StorybookWrapperStyled = styled(StorybookWrapper)`
  font-family: OpenSans, serif;
  height: 100%;
`;

const BasicModal = (args: any) => {
    const modal = useMountChild(1000, 1000);

    useEffect(() => args.open ? modal.renderComponent() : modal.unmountComponent(), [args.open]);

    return (
        <StorybookWrapperStyled>
            {modal.render ?
                <Modal
                    closeOnClickOutside
                    dismissible={true}
                    {...modal}
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

BasicModal.args = {
    open: true
};

export default BasicModal;

