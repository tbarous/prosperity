import Modal from "@components/modal/Modal";
import BasicModal from "@stories/modal/BasicModal.story";
import AuthModal from "@stories/modal/AuthModal.story";

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

export {
    BasicModal,
    AuthModal
}