import React from "react";
import Icon from "@components/icon/Icon";
import {Times as TimesIcon, ArrowRight as ArrowToTheRight} from "@icons";

export default {
    title: 'Icon',
    component: () => { },
    argTypes: {},
};

const Times = () => <Icon icon={TimesIcon}/>;
const ArrowRight = () => <Icon icon={ArrowToTheRight}/>;

export {
    Times,
    ArrowRight
}