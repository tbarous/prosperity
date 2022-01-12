import React from 'react';
import Text from "@atoms/text/Text";

const DefaultText = (args: { bold?: boolean }) => (
    <Text bold={args.bold}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi corporis deserunt dolorem, esse est facere
        fugit magni, necessitatibus officia porro quam ratione reprehenderit repudiandae voluptates. Cupiditate dolor
        obcaecati quam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi corporis deserunt dolorem, esse est facere
        fugit magni, necessitatibus officia porro quam ratione reprehenderit repudiandae voluptates. Cupiditate dolor
        obcaecati quam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi corporis deserunt dolorem, esse est facere
        fugit magni, necessitatibus officia porro quam ratione reprehenderit repudiandae voluptates. Cupiditate dolor
        obcaecati quam.
    </Text>
);

DefaultText.args = {
    bold: false
};

export default DefaultText;