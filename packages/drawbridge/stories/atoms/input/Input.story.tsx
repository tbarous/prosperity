import React, {useEffect, useState} from 'react';
import Checkbox from "@atoms/checkbox/Checkbox";
import styled from "styled-components";
import Input from "@atoms/input/Input";

const Wrapper = styled.div`width: 250px;`;

const DefaultInput = (args: { label?: string }) => {
    const {label} = args;

    return <Wrapper><Input label={label}/></Wrapper>;
}

DefaultInput.args = {
    label: "Name"
};

export default DefaultInput;