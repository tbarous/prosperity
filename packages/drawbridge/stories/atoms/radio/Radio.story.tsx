import React, {useEffect, useState} from 'react';
import Radio from "@atoms/radio/Radio";

const DefaultRadio = (args: { disabled?: boolean, checked?: boolean, label?: string }) => {
    const [checked, setChecked] = useState<boolean | undefined>(false);

    useEffect(() => setChecked(args.checked), [args.checked])

    return <Radio onChange={() => setChecked(!checked)} checked={checked} label={args.label}
                  disabled={args.disabled}/>;
}

DefaultRadio.args = {
    label: "Label",
    checked: false,
    disabled: false
};


export default DefaultRadio;