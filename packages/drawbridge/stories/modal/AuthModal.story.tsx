import React from "react";
import {useState} from "react";
import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import Tabs from "@components/tabs/Tabs";
import Tab from "@components/tabs/Tab";
import Card from "@components/card/Card";
import ModalFooter from "@components/modal/ModalFooter";
import Form from "@components/form/Form";
import Input from "@components/form/Input";
import ButtonTypeEnum from "@components/button/enums/ButtonTypeEnum";
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";
import ModalBody from "@components/modal/ModalBody";
import ModalHeader from "@components/modal/ModalHeader";

export const StyledModalHeaderNoPadding = styled(ModalHeader)`
  display: flex;
  align-items: center;
`;

export const StyledModalBody = styled(ModalBody)`
  padding: 2rem 1rem;
`;
const StorybookButtonWrapper = styled.div`
  width: 150px;
`;

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const AuthModal = (args: any) => {
    const [modal, setModal] = useState(false);
    const [active, setActive] = useState("1");

    function onClick(e: any) {
        setActive(e.target.id)
    }

    function onSubmitLogin(){
        console.log("login")
    }

    return (
        <StorybookWrapperStyled>
            <StorybookButtonWrapper>
                <Button onClick={() => setModal(true)}>
                    Login/Register
                </Button>
            </StorybookButtonWrapper>

            {modal ?
                <Modal closeOnClickOutside onClose={() => setModal(false)}>
                    <StyledModalHeaderNoPadding>
                        <Tabs {...args}>
                            <Tab >Login</Tab>
                            <Tab>Register</Tab>
                        </Tabs>
                    </StyledModalHeaderNoPadding>

                    <StyledModalBody>
                        {active === "1" ?
                            <Form onSubmit={onSubmitLogin}>
                                <Input label="Email"/>

                                <br/>

                                <Input label="Password"/>

                                <br/>

                                <Button type={ButtonTypeEnum.SUBMIT}>Submit</Button>
                            </Form>

                            : null}
                        {active === "2" ? <Card>Register Form</Card> : null}
                    </StyledModalBody>

                    <ModalFooter>
                        Footer
                    </ModalFooter>
                </Modal>
                : null}
        </StorybookWrapperStyled>
    )
};

export default AuthModal;