import React from 'react';
import Modal from "@components/modal/Modal";
import AuthModal from "@stories/modal/AuthModal.story";
import BasicModal from "@stories/modal/BasicModal.story";

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

export const Basic: any = BasicModal.bind({});
export const Auth: any = AuthModal.bind({});

Basic.args = {};
Auth.args = {};