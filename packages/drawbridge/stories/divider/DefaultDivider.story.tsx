import React from 'react';
import styled from "styled-components";
import Divider from "@components/divider/Divider";
import Text from "@components/text/Text";

const DefaultDivider = (args: { spacing?: number }) => (
    <>
        <Text>Text</Text>

        <Divider spacing={args.spacing}/>

        <Text>Text</Text>
    </>
);

DefaultDivider.args = {
    spacing: 10
};

export default DefaultDivider;