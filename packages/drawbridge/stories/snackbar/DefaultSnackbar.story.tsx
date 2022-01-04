import React, {useEffect} from 'react';
import Snackbar, {SnackbarProps} from "@components/snackbar/Snackbar";
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";
import styled from "styled-components";
import useMountChild from "@hooks/useMountChild";
import StorybookWrapper from "@stories/StorybookWrapper";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const Content = styled.div`
  text-align: center;
  margin: auto;
`;

interface DefaultSnackbarStorybookProps extends SnackbarProps {
    open: boolean
}

const DefaultSnackbar = (args: DefaultSnackbarStorybookProps) => {
    const snackbar = useMountChild(1000, 1000);

    useEffect(() => args.open ? snackbar.renderComponent() : snackbar.unmountComponent(), [args.open]);

    return (
        <StorybookWrapperStyled>
            {snackbar.render && <Snackbar
                {...snackbar}
                variation={args.variation}
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
    variation: SnackbarVariationEnum.SUCCESS,
    dismissible: false,
    closeOnDelay: 3000
};

export default DefaultSnackbar;