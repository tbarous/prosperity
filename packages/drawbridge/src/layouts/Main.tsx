import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Card from "@components/card/Card";
import Image from "@components/image/Image";
import {BasicComponentProps} from "@typings";
import MainStyled from "./styled/MainStyled";

export interface MainProps extends BasicComponentProps {}

const Main: FunctionComponent<MainProps> = (props: MainProps): ReactElement => {
    const {children, className} = props;

    return (
        <MainStyled>
            <Container fluid>
                <Row gutter={20}>
                    <Col xs={3}>
                        <Card rounded>
                            <Image rounded-top src="/img.jpg" alt="img"/>

                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
                                deserunt
                                dignissimos, distinctio
                                dolore error exercitationem minima nisi placeat praesentium provident quas quo
                                ratione sunt
                                temporibus unde vel
                                voluptas.
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </MainStyled>
    )
}

export default Main;