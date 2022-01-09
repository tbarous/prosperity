import React, {useEffect, useState} from "react";
import Radio from "@components/form/Radio";

const DefaultRadio = (args: any) => {
    const [checked, setChecked] = useState(2);

    useEffect(() => setChecked(args.checked), [args.checked])

    return <Radio disabled onChange={() => setChecked(1)} checked={checked === 1} label={args.label}/>;
}

DefaultRadio.args = {
    label: "Label",
    checked: 2
};

export default DefaultRadio;