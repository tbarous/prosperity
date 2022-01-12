import React, {useEffect, useState} from 'react';
import Checkbox from "@atoms/checkbox/Checkbox";

const DefaultCheckbox = (args: { disabled?: boolean, checked?: boolean, label?: string }) => {
    const [checked, setChecked] = useState<boolean | undefined>(false);

    useEffect(() => setChecked(args.checked), [args.checked])

    return <Checkbox onChange={() => setChecked(!checked)} checked={checked} label={args.label}
                     disabled={args.disabled}/>;
}

DefaultCheckbox.args = {
    label: "Label",
    checked: false,
    disabled: false
};


export default DefaultCheckbox;