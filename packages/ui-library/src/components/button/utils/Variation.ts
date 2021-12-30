import Variation from "@components/button/enums/Variation";
import Theme from "@theme/interfaces";

function variationMapping(variation: Variation, theme: Theme) {
    if (variation === Variation.PRIMARY) {
        return `background-color: ${theme.color.primary};`;
    }

    if (variation === Variation.SECONDARY) {
        return `background-color: ${theme.color.secondary};`;
    }
}

export {
    variationMapping
}