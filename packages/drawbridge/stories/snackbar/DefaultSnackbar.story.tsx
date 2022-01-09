import React, {useEffect, useState} from 'react';
import Snackbar, {SnackbarVariations} from "@components/snackbar/Snackbar";
import {useTheme} from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import SnackbarContentStyled from '@components/snackbar/styled/SnackbarContentStyled';

const DefaultSnackbar = (args: { variation?: SnackbarVariations, dismissible?: boolean, closeOnDelay?: number }) => {
    const {variation, dismissible, closeOnDelay} = args;

    const [unmount, setUnmount] = useState(false);
    const [render, setRender] = useState(true);

    return (
        <>
            <button onClick={() => setUnmount(false)}>mount</button>
            <button onClick={() => setUnmount(true)}>unmount</button>

            {render && <Snackbar
                danger={variation === SnackbarVariations.DANGER}
                success={variation === SnackbarVariations.SUCCESS}
                warning={variation === SnackbarVariations.WARNING}
                dismissible={dismissible}
                closeOnDelay={closeOnDelay}
                unmount={unmount}
                onUnmounted={() => setRender(false)}
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
    open: true,
    dismissible: false,
    closeOnDelay: 3000,
    variation: SnackbarVariations.SUCCESS
};

export default DefaultSnackbar;