import React from "react";
import Text from "@atoms/text/Text";
import TextMuted from "@atoms/text/TextMuted";
import TextEmphasized from "@atoms/text/TextEmphasized";

export default {
    title: 'Design System/Atoms/Text',
    component: () => {},
    argTypes: {},
    parameters: {
        layout: 'padded',
    },
};

const text = `
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi corporis deserunt dolorem, esse est facere
fugit magni, necessitatibus officia porro quam ratione reprehenderit repudiandae voluptates. Cupiditate dolor
obcaecati quam.
`

const Normal = (args: {}) => <Text>{text}</Text>;
const Muted = (args: {}) => <TextMuted>{text}</TextMuted>;
const Emphasized = (args: {}) => <TextEmphasized>{text}</TextEmphasized>;

export {
    Normal,
    Muted,
    Emphasized
}