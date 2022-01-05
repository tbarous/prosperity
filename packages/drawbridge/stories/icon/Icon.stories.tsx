import React from "react";
import Icon from "@components/icon/Icon";
import {Times as TimesIcon} from "@icons";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

export default {
    title: 'Icon',
    component: () => {
    },
    argTypes: {},
};

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const Times = () => <StorybookWrapperStyled><Icon icon={TimesIcon} width={30} height={30}/></StorybookWrapperStyled>

export {
    Times
}