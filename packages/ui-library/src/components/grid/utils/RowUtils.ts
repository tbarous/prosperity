function calculateMargin(gutter?: number) {
    if (!gutter) return `
        margin-left: -15px; 
        margin-right: -15px;
    `;

    const halfGutter = gutter * .5;

    return `
        margin-left: -${halfGutter + 15}px;
        margin-right: -${halfGutter + 15}px`
        ;
}

export {
    calculateMargin
}