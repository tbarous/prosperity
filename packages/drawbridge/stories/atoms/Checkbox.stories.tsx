import React, {useEffect, useState} from "react";
import CheckboxComponent from "@atoms/Checkbox";

export default {
    title: 'Design System/Atoms/Checkbox',
    component: () => {},
    argTypes: {},
    parameters: {
        layout: 'padded',
    },
};

const Checkbox = (args: { disabled?: boolean, checked?: boolean, label?: string }) => {
    const [checked, setChecked] = useState<boolean | undefined>(false);

    useEffect(() => setChecked(args.checked), [args.checked])

    return (
        <CheckboxComponent
            onChange={() => setChecked(!checked)}
            checked={checked}
            label={args.label}
            disabled={args.disabled}
        />
    );
}

Checkbox.args = {
    label: "Label",
    checked: false,
    disabled: false
};


export {
    Checkbox
}