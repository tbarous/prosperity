import React from "react";
import Modal from "@components/modal/Modal";
import ModalFooter from "@components/modal/ModalFooter";
import ModalHeader from "@components/modal/ModalHeader";
import ModalBody from "@components/modal/ModalBody";

const BasicModal = (args: any) => {
    return (
        <Modal closeOnClickOutside dismissible={true}>
            <ModalHeader>Header</ModalHeader>
            <ModalBody>Body</ModalBody>
            <ModalFooter>Footer</ModalFooter>
        </Modal>
    )
};

BasicModal.args = {
    open: true
};

export default BasicModal;

