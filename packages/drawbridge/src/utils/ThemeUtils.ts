import ThemeInterface from "@theme/interfaces/ThemeInterface";

function propsMapper<T extends {theme: ThemeInterface}>(props: T) {
    const theme = props.theme;

}

function px(s: string | number){
    return `${s}px`;
}

export {
    px
}