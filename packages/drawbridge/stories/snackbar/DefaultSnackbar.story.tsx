import React, {useState} from 'react';
import Snackbar, {SnackbarVariations} from "@components/snackbar/Snackbar";
import SnackbarContentStyled from '@components/snackbar/styled/SnackbarContentStyled';
import useControlChild from "@hooks/useControlChild";

const DefaultSnackbar = (args: { variation: SnackbarVariations, dismissible: boolean, closeOnDelay: number }) => {
    const {variation, dismissible, closeOnDelay} = args;

    const {render, toggle, unmount, onUnmounted} = useControlChild();

    return (
        <>
            <button onClick={toggle}>toggle</button>

            {render && <Snackbar
                danger={variation === SnackbarVariations.DANGER}
                success={variation === SnackbarVariations.SUCCESS}
                warning={variation === SnackbarVariations.WARNING}
                dismissible={dismissible}
                closeOnDelay={closeOnDelay}
                unmount={unmount}
                onUnmounted={onUnmounted}
            >
                <SnackbarContentStyled>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur atque consequuntur
                    distinctio dolor eius eos hic illum libero molestiae nam non
                </SnackbarContentStyled>
            </Snackbar>}
        </>
    )
}

DefaultSnackbar.args = {
    dismissible: false,
    closeOnDelay: 3000,
    variation: SnackbarVariations.SUCCESS
};

export default DefaultSnackbar;