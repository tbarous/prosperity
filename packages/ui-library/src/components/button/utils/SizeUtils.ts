import SizeEnum from "@components/button/enums/SizeEnum";
import Theme from "@theme/interfaces";

function applySize(size: SizeEnum, theme: Theme) {
    if (size === SizeEnum.SMALL) {
        return `padding: .4rem;`;
    }

    if (size === SizeEnum.MEDIUM) {
        return `padding: .8rem;`;
    }

    if (size === SizeEnum.LARGE) {
        return `padding: 1.2rem;`;
    }
}

export {
    applySize
}