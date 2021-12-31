function up(breakpoint: string, styles: string): string {
    return `
        @media screen and (min-width: ${breakpoint}){
            ${styles}
        }
    `;
}

function down(breakpoint: string, styles: string): string {
    return `
        @media screen and (max-width: ${breakpoint}){
            ${styles}
        }
    `;
}

export {
    up,
    down
}