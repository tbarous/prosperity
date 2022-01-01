import React from "react";
import {useState} from "react";
import {
    StorybookButtonWrapper,
    StorybookWrapperStyled,
    StyledModalBody,
    StyledModalHeader,
    StyledModalHeaderNoPadding
} from "@stories/GenericStyledComponents";
import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import Tabs from "@components/tabs/Tabs";
import Tab from "@components/tabs/Tab";
import Card from "@components/card/Card";
import ModalFooter from "@components/modal/ModalFooter";
import Form from "@components/form/Form";
import Input from "@components/form/Input";
import TypeEnum from "@components/button/enums/TypeEnum";

const AuthModalTemplate = (args: any) => {
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
                            <Tab id="1" onClick={onClick} active={active === "1"}>Login</Tab>
                            <Tab id="2" onClick={onClick} active={active === "2"}>Register</Tab>
                        </Tabs>
                    </StyledModalHeaderNoPadding>

                    <StyledModalBody>
                        {active === "1" ?
                            <Form onSubmit={onSubmitLogin}>
                                <Input label="Email"/>

                                <br/>

                                <Input label="Password"/>

                                <br/>

                                <Button type={TypeEnum.SUBMIT}>Submit</Button>
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

export default AuthModalTemplate;