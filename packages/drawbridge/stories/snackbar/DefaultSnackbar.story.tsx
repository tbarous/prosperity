import React, {useState} from 'react';
import Snackbar, {SnackbarVariations} from "@components/snackbar/Snackbar";
import SnackbarContentStyled from '@components/snackbar/styled/SnackbarContentStyled';

const DefaultSnackbar = (args: { variation: SnackbarVariations, dismissible: boolean, closeOnDelay:number }) => {
    const {variation, dismissible, closeOnDelay} = args;
    const [display, setDisplay] = useState(true);

    return (
        <Snackbar
            danger={variation === SnackbarVariations.DANGER}
            success={variation === SnackbarVariations.SUCCESS}
            warning={variation === SnackbarVariations.WARNING}
            dismissible={dismissible}
            closeOnDelay={closeOnDelay}
            display={display}
            onStopDisplay={() => setDisplay(false)}
        >
            <SnackbarContentStyled>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur atque consequuntur
                distinctio dolor eius eos hic illum libero molestiae nam non
            </SnackbarContentStyled>
        </Snackbar>
    )
}

DefaultSnackbar.args = {
    dismissible: false,
    variation: SnackbarVariations.SUCCESS,
    closeOnDelay: 5000
};

export default DefaultSnackbar;