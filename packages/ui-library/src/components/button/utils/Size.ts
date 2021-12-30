import Size from "@components/button/enums/Size";
import Theme from "@theme/interfaces";

function sizeMapping(size: Size, theme: Theme) {
    if (size === Size.SMALL) {
        return `padding: .4rem;`;
    }

    if (size === Size.MEDIUM) {
        return `padding: .8rem;`;
    }

    if (size === Size.LARGE) {
        return `padding: 1.2rem;`;
    }
}

export {
    sizeMapping
}