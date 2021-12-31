import {up} from "@theme/utils/Media";

const calculateContainerWidth = (breakpoint: string, width: string, isFluid?: boolean) => {
    if (isFluid) return;

    return up(breakpoint, `
        max-width: ${width};
        margin-right: auto;
        margin-left: auto;
    `)
}

const calculateContainerPadding = (gutter?: number) => {
    if (!gutter) return `
        padding-left: 15px; 
        padding-right: 15px;
    `;

    const calc = gutter * .75;

    return `
        padding-left: ${calc}px; 
        padding-right: ${calc}px; 
    `;
}

export {
    calculateContainerWidth,
    calculateContainerPadding
}