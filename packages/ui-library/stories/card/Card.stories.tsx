import React from 'react';
import {BasicComponentProps} from "@typings";
import Card from "@components/card/Card";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Image from "@components/image/Image";
import Text from "@components/text/Text";
import {CardStyled, StorybookWrapperStyled} from "@stories/GenericStyledComponents";

export default {
    title: 'Card',
    component: Card,
    argTypes: {},
};

const DefaultButtonTemplate = (args: BasicComponentProps) => (
    <StorybookWrapperStyled>
        <Container fluid>
            <Row gutter={14}>
                <Col xs={4}>
                    <CardStyled {...args}>
                        {args.children}
                    </CardStyled>
                </Col>
            </Row>
        </Container>
    </StorybookWrapperStyled>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {
    children: <>
        <Image src="/img.jpg" alt="img"/>

        <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam dolore eaque error
            exercitationem ipsam, laborum nulla numquam placeat rem suscipit voluptatum. Alias error id iusto molestiae
            nulla quibusdam velit! Alias, aliquid aperiam atque beatae dicta doloribus, error eveniet iste itaque labore
            nesciunt perspiciatis quae quas repellat reprehenderit sapiente sit.
        </Text>
    </>
};