import React, {ReactNode} from "react";
import styled from "styled-components";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Card from "@components/card/Card";
import Image from "@components/image/Image";
import {px} from "@utils/ThemeUtils";
import Text from "@components/text/Text";

const MainStyled = styled.div`
  padding: 1rem 3rem;
  flex: 1;
`;

const TextStyled = styled(Text)`
  padding: ${(p: any) => px(p.theme.spacing.s6)} ${(p: any) => px(p.theme.spacing.s8)};
  line-height: ${(p: any) => p.theme.lineHeight.large};
`;

interface Props {
    children?: ReactNode,
    className?: string
}

const Main: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className} = props;

    return (
        <MainStyled>
            <Container fluid>
                <Row gutter={20}>
                    <Col xs={3}>
                        <Card rounded>
                            <Image
                                rounded-top
                                src="/img.jpg"
                                alt="img"
                            />

                            <TextStyled>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
                                deserunt
                                dignissimos, distinctio
                                dolore error exercitationem minima nisi placeat praesentium provident quas quo
                                ratione sunt
                                temporibus unde vel
                                voluptas.
                            </TextStyled>
                        </Card>
                    </Col>

                    <Col xs={3}>
                        <Card rounded>
                            <Image
                                rounded-top
                                src="/img.jpg"
                                alt="img"
                            />

                            <TextStyled>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
                                deserunt
                                dignissimos, distinctio
                                dolore error exercitationem minima nisi placeat praesentium provident quas quo
                                ratione sunt
                                temporibus unde vel
                                voluptas.
                            </TextStyled>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </MainStyled>
    )
}

export default Main;