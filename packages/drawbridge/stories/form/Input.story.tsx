import React from "react";
import Input from "@components/form/Input";
import styled from "styled-components";

const Wrapper = styled.div`width: 250px;`;

const DefaultInput = (args: { label?: string }) => {
    const {label} = args;

    return <Wrapper><Input label={label}/></Wrapper>;
}

DefaultInput.args = {
    label: "Name"
};

export default DefaultInput;