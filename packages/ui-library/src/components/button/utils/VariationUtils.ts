import VariationEnum from "@components/button/enums/VariationEnum";
import Theme from "@theme/interfaces";

function applyVariation(variation: VariationEnum, theme: Theme) {
    if (variation === VariationEnum.PRIMARY) {
        return `background-color: ${theme.color.primary};`;
    }

    if (variation === VariationEnum.SECONDARY) {
        return `background-color: ${theme.color.secondary};`;
    }
}

export {
    applyVariation
}