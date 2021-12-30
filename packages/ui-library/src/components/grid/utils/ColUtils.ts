import {up} from "@theme/utils/Media";

const calculateCols = (breakpoint: string, cols?: number, gutter?: number) => {
    if (!cols) return;

    const colsCalculated = (100 / 12) * cols;

    gutter = gutter || 0;

    const rule = `
        flex: 0 0 auto;
        width: ${colsCalculated}%;
        max-width: ${colsCalculated}%;
        -webkit-box-flex: 0;
    `;

    return up(breakpoint, rule);
}

const calculateGutter = (gutter?: number) => {
    if (!gutter) return;

    const halfGutter = gutter / 2;

    return `
        padding-left: ${halfGutter}px; 
        padding-right: ${halfGutter}px;
    `;
}

export {
    calculateCols,
    calculateGutter
}