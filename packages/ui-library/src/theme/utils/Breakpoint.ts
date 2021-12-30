import IBreakpoint from "@theme/interfaces/Breakpoint";

function up(breakpoint: IBreakpoint, styles: string) {
    return `
        @media screen and (min-width: ${breakpoint}){
            ${styles}
        }
    `;
}

function down(breakpoint: IBreakpoint, styles: string) {
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