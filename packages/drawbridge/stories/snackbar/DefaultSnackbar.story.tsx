import React, {useEffect} from 'react';
import Snackbar, {SnackbarVariations} from "@components/snackbar/Snackbar";
import {useTheme} from "styled-components";
import useMountChild from "@hooks/useMountChild";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import SnackbarContentStyled from '@components/snackbar/styled/SnackbarContentStyled';

const DefaultSnackbar = (args: { variation?: SnackbarVariations, open?: boolean, dismissible?: boolean, closeOnDelay?: number }) => {
    const theme: ThemeInterface = useTheme();

    const {render, mount, unmountComponent, toggle, renderComponent} = useMountChild(theme.animation.snackbar);

    const {variation,dismissible, closeOnDelay} = args;

    // useEffect(() => {
    //     if(args.open){
    //         renderComponent()
    //     } else {
    //         unmountComponent()
    //     }
    // }, [args.open]);

    console.log('RERENDERED', render)

    return (
        <>
            {render && <Snackbar
                unmountComponent={unmountComponent}
                mount={mount}
                danger={variation === SnackbarVariations.DANGER}
                success={variation === SnackbarVariations.SUCCESS}
                warning={variation === SnackbarVariations.WARNING}
                dismissible={dismissible}
                closeOnDelay={closeOnDelay}
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