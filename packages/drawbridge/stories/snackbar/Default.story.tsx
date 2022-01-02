import React, {useState} from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import {BasicComponentProps} from "@typings";
import Snackbar, {SnackbarProps} from "@components/snackbar/Snackbar";
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";

const Default = (args: SnackbarProps) => {
    const [show, setShow] = useState(true);

    return (
        <StorybookWrapper>
            {show && <Snackbar
                onClose={() => setShow(false)}
                {...args}>
                {args.children}
            </Snackbar>}
        </StorybookWrapper>
    );
}

Default.args = {
    children: "Success!",
    variation: SnackbarVariationEnum.SUCCESS,
    dismissible: false,
    closeOnDelay: 5000
};

export default Default;