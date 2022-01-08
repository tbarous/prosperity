import React from "react";
import Icon from "@components/icon/Icon";
import {Times as TimesIcon} from "@icons";
import styled from "styled-components";

export default {
    title: 'Icon',
    component: () => {
    },
    argTypes: {},
};

const Times = () => <Icon icon={TimesIcon} width={30} height={30}/>;

export {
    Times
}