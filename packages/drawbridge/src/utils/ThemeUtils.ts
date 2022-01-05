import ThemeInterface from "@theme/interfaces/ThemeInterface";

function propsMapper<T extends {theme: ThemeInterface}>(props: T) {
    const theme = props.theme;

}

const ThemeUtils = {
    propsMapper
}

export default ThemeUtils;