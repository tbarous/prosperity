import React from "react";
import IconComponent from "@atoms/Icon";
import {Times as TimesIcon, ArrowRight as ArrowToTheRight} from "@icons";

export default {
    title: 'Design System/Atoms/Icon',
    component: () => { },
    argTypes: {},
};

const Icon = () => <IconComponent icon={TimesIcon}/>;
const ArrowRight = () => <IconComponent icon={ArrowToTheRight}/>;

export {
    Icon
}