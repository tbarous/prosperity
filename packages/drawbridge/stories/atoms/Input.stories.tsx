import React, {useState} from "react";
import InputComponent from "@atoms/Input";

export default {
    title: 'Design System/Atoms/Input',
    component: () => {},
    argTypes: {
        label: {
            options: [],
            control: {type: 'text'},
            defaultValue: "Label"
        },
        value: {
            options: [],
            control: {type: 'text'},
            defaultValue: ""
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { label: string, value: string };

const Input = (args: T) => {
    const [value, setValue] = useState(args.value);

    return <InputComponent onChange={(e) => setValue(e.target.value)} value={value} label={args.label}/>
}

export {
    Input,
}