import React from "react";
import Input from "@components/form/Input";
import { StorybookWrapperStyled } from "@stories/GenericStyledComponents";

const DefaultInput = (args: any) => (
    <StorybookWrapperStyled>
        <Input {...args} />
    </StorybookWrapperStyled>
);

DefaultInput.args = {
    label: "Label"
};

export default DefaultInput;