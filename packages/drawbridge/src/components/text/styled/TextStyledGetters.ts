import {TextStyledProps} from "@components/text/styled/TextStyled";

const TextStyledGetters = {
    FontSize: (props: TextStyledProps) => props.theme.fontSize.md,
    Color: (props: TextStyledProps) => props.theme.color.dark,
    FontWeight: (props: TextStyledProps) => props.theme.fontWeight.normal,
}

export default TextStyledGetters;