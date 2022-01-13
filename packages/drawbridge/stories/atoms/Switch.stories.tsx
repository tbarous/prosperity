import React from "react";
import SwitchComponent from "@atoms/Switch";

export default {
    title: 'Design System/Atoms/Switch',
    component: () => {},
    argTypes: {},
    parameters: {
        layout: 'padded',
    },
};

const Switch = (args: { disabled?: boolean, checked?: boolean, label?: string }) => {
    return <SwitchComponent onChange={() => {}}/>
}

Switch.args = {
    label: "Label",
    checked: false,
    disabled: false
};


export {
    Switch
}