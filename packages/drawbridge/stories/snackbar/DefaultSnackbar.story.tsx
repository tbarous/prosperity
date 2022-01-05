import React, {useEffect} from 'react';
import Snackbar, {SnackbarVariationEnum} from "@components/snackbar/Snackbar";
import styled from "styled-components";
import useMountChild from "@hooks/useMountChild";
import StorybookWrapper from "@stories/StorybookWrapper";
import {BasicComponentProps} from "@typings";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const Content = styled.div`
  text-align: center;
  margin: auto;
`;

interface Props extends BasicComponentProps {
    variation?: SnackbarVariationEnum,
    open?: boolean,
    dismissible?: boolean,
    closeOnDelay?: number
}

const DefaultSnackbar = (args: Props) => {
    const snackbar = useMountChild(1000, 1000);

    useEffect(() => args.open ? snackbar.renderComponent() : snackbar.unmountComponent(), [args.open]);

    return (
        <StorybookWrapperStyled>
            {snackbar.render && <Snackbar
                {...snackbar}
                danger={args.variation === SnackbarVariationEnum.DANGER}
                success={args.variation === SnackbarVariationEnum.SUCCESS}
                warning={args.variation === SnackbarVariationEnum.WARNING}
                dismissible={args.dismissible}
                closeOnDelay={args.closeOnDelay}
            >
                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur atque consequuntur
                    distinctio dolor eius eos hic illum libero molestiae nam non
                </Content>
            </Snackbar>}
        </StorybookWrapperStyled>
    );
}

DefaultSnackbar.args = {
    open: false,
    dismissible: false,
    closeOnDelay: 3000,
    variation: SnackbarVariationEnum.WARNING
};

export default DefaultSnackbar;