// import React, {useEffect} from "react";
// import {useState} from "react";
// import Button, {ButtonTypeEnum} from "@tbarous/drawbridge/components/button/Button";
// import Modal from "@tbarous/drawbridge/components/modal/Modal";
// import Tabs from "@tbarous/drawbridge/components/tabs/Tabs";
// import Tab from "@tbarous/drawbridge/components/tabs/Tab";
// import Card from "@tbarous/drawbridge/components/card/Card";
// import ModalFooter from "@tbarous/drawbridge/components/modal/ModalFooter";
// import Form from "@tbarous/drawbridge/components/form/Form";
// import Input from "@tbarous/drawbridge/components/form/Input";
// import styled from "styled-components";
// import ModalBody from "@tbarous/drawbridge/components/modal/ModalBody";
// import ModalHeader from "@tbarous/drawbridge/components/modal/ModalHeader";
// import useMountChild from "@tbarous/drawbridge/hooks/useMountChild";
//
// export const StyledModalHeaderNoPadding = styled(ModalHeader)`
//   display: flex;
//   align-items: center;
// `;
//
// export const StyledModalBody = styled(ModalBody)`
//   padding: 2rem 1rem;
// `;
//
// interface Props {
//     open?: boolean
// }
//
// const AuthModal = (props: Props) => {
//     const modal = useMountChild(1000, 1000);
//
//     useEffect(() => props.open ? modal.renderComponent() : modal.unmountComponent(), [props.open]);
//
//     const [active, setActive] = useState("1");
//
//     function onClick(e: any) {
//         setActive(e.target.id)
//     }
//
//     function onSubmitLogin() {
//         console.log("login")
//     }
//
//     return modal.render ? (
//         <Modal
//             closeOnClickOutside
//             {...modal}
//         >
//             <StyledModalHeaderNoPadding>
//                 <Tabs onChange={() => {}}>
//                     <Tab>Login</Tab>
//                     <Tab>Register</Tab>
//                 </Tabs>
//             </StyledModalHeaderNoPadding>
//
//             <StyledModalBody>
//                 {active === "1" ?
//                     <Form onSubmit={onSubmitLogin}>
//                         <Input label="Email"/>
//
//                         <br/>
//
//                         <Input label="Password"/>
//
//                         <br/>
//
//                         <Button type={ButtonTypeEnum.SUBMIT}>Submit</Button>
//                     </Form>
//
//                     : null}
//                 {active === "2" ? <Card>Register Form</Card> : null}
//             </StyledModalBody>
//
//             <ModalFooter>
//                 Footer
//             </ModalFooter>
//         </Modal>
//     ) : null;
// };
//
// export default AuthModal;