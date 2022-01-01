import React from "react";
import Input from "@components/form/Input";
import { StorybookWrapperStyled } from "@stories/GenericStyledComponents";

const InputStory = (args: any) => (
    <StorybookWrapperStyled>
        <Input {...args} />
    </StorybookWrapperStyled>
);

InputStory.args = {
    label: "Label"
};

export default InputStory;