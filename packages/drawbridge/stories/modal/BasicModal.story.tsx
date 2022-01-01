import React from "react";
import {useState} from "react";
import {
    StorybookButtonWrapper,
    StorybookWrapperStyled,
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

const BasicModal = (args: any) => {
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

export default BasicModal;

