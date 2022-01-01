import React from 'react';
import Modal from "@components/modal/Modal";
import Basic from "@stories/modal/BasicModal.story";
import Auth from "@stories/modal/AuthModal.story";

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
    Basic,
    Auth
}