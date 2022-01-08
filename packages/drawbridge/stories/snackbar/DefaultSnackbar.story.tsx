import React, {useEffect} from 'react';
import Snackbar, {SnackbarVariations} from "@components/snackbar/Snackbar";
import {useTheme} from "styled-components";
import useMountChild from "@hooks/useMountChild";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import SnackbarContentStyled from '@components/snackbar/styled/SnackbarContentStyled';

const DefaultSnackbar = (args: { variation?: SnackbarVariations, open?: boolean, dismissible?: boolean, closeOnDelay?: number }) => {
    const theme: ThemeInterface = useTheme();

    const snackbar = useMountChild(theme.animation.snackbar);

    useEffect(() => snackbar.toggle, [args.open]);

    return snackbar.render && (
        <Snackbar
            unmountComponent={snackbar.unmountComponent}
            mount={snackbar.mount}
            danger={args.variation === SnackbarVariations.DANGER}
            success={args.variation === SnackbarVariations.SUCCESS}
            warning={args.variation === SnackbarVariations.WARNING}
            dismissible={args.dismissible}
            closeOnDelay={args.closeOnDelay}
        >
            <SnackbarContentStyled>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur atque consequuntur
                distinctio dolor eius eos hic illum libero molestiae nam non
            </SnackbarContentStyled>
        </Snackbar>
    )
}

DefaultSnackbar.args = {
    open: true,
    dismissible: false,
    closeOnDelay: 3000,
    variation: SnackbarVariations.SUCCESS
};

export default DefaultSnackbar;