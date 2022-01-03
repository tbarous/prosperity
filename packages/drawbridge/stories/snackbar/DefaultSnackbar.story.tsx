import React, {useState} from 'react';
import Snackbar, {SnackbarProps} from "@components/snackbar/Snackbar";
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";
import Button from "@components/button/Button";
import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import {StorybookWrapperStyled} from '@stories/GenericStyledComponents';
import styled from "styled-components";
import useDelayedUnmounting from "@hooks/useDelayedUnmounting";
import useDelayUnmountChild from "@hooks/useDelayUnmountChild";

const Content = styled.div`
  text-align: center;
  margin: auto;
`;

const DefaultSnackbar = (args: SnackbarProps) => {
    const [show, unmounting, onStartUnmount, onEndUnmount, onToggle] = useDelayUnmountChild();

    return (
        <StorybookWrapperStyled>
            <Container fluid>
                <Row>
                    <Col xs={1}>
                        <Button
                            variation={ButtonVariationEnum.PRIMARY}
                            onClick={onToggle}
                        >
                            Open Snackbar
                        </Button>
                    </Col>
                </Row>
            </Container>

            {show && <Snackbar
                unmounting={unmounting}
                onStartUnmount={onStartUnmount}
                onEndUnmount={onEndUnmount}
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
    variation: SnackbarVariationEnum.SUCCESS,
    dismissible: false,
    closeOnDelay: 3000
};

export default DefaultSnackbar;