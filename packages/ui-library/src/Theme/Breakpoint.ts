export const breakpointExample: Breakpoint = {
    xs: "350px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
}

interface Breakpoint {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
    xxl: string
}

function up(breakpoint: Breakpoint, styles: string) {
    return `
        @media screen and (min-width: ${breakpoint}){
            ${styles}
        }
    `;
}

function down(breakpoint: Breakpoint, styles: string) {
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

export default Breakpoint;