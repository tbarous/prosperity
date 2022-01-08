import React, {useEffect} from 'react';
import Snackbar, {SnackbarVariations} from "@components/snackbar/Snackbar";
import styled from "styled-components";
import useMountChild from "@hooks/useMountChild";
import {BasicComponentProps} from "@typings";

const Content = styled.div`
  text-align: center;
  margin: auto;
`;

interface Props extends BasicComponentProps {
    variation?: SnackbarVariations,
    open?: boolean,
    dismissible?: boolean,
    closeOnDelay?: number
}

const DefaultSnackbar = (args: Props) => {
    const snackbar = useMountChild(500);

    useEffect(() => args.open ? snackbar.renderComponent() : snackbar.unmountComponent(), [args.open]);

    return (
        <>
            {snackbar.render && <Snackbar
                {...snackbar}
                danger={args.variation === SnackbarVariations.DANGER}
                success={args.variation === SnackbarVariations.SUCCESS}
                warning={args.variation === SnackbarVariations.WARNING}
                dismissible={args.dismissible}
                closeOnDelay={args.closeOnDelay}
            >
                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur atque consequuntur
                    distinctio dolor eius eos hic illum libero molestiae nam non
                </Content>
            </Snackbar>}
        </>
    );
}

DefaultSnackbar.args = {
    open: true,
    dismissible: false,
    closeOnDelay: 3000,
    variation: SnackbarVariations.SUCCESS
};

export default DefaultSnackbar;