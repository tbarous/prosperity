import React from 'react';
import Switch from "@atoms/switch/Switch";

const DefaultSwitch = (args: { disabled?: boolean, checked?: boolean, label?: string }) => {
    return <Switch onChange={() => {}}/>
}

DefaultSwitch.args = {
    label: "Label",
    checked: false,
    disabled: false
};


export default DefaultSwitch;