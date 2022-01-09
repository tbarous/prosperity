import React, {useEffect, useState} from "react";
import Switch from "@components/form/Switch";

const DefaultSwitch = (args: { active?: boolean }) => {
    const [active, setActive] = useState<boolean | undefined>(false);

    useEffect(() => setActive(args.active), [args.active])

    return <Switch active={active} onChange={() => setActive(!active)}/>;

}

DefaultSwitch.args = {
    label: "Label",
    active: false
};

export default DefaultSwitch;