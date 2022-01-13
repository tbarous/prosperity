import React, {useEffect, useState} from "react";
import RadioComponent from "@atoms/Radio";

export default {
    title: 'Design System/Atoms/Radio',
    component: () => {},
    argTypes: {},
    parameters: {
        layout: 'padded',
    },
};

const Radio = (args: { disabled?: boolean, checked?: boolean, label?: string }) => {
    const [checked, setChecked] = useState<boolean | undefined>(false);

    useEffect(() => setChecked(args.checked), [args.checked])

    return (
        <RadioComponent
            onChange={() => setChecked(!checked)}
            checked={checked}
            label={args.label}
            disabled={args.disabled}
        />
    );
}

Radio.args = {
    label: "Label",
    checked: false,
    disabled: false
};


export {
    Radio
}