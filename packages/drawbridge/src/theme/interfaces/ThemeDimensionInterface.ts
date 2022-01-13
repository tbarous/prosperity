interface ThemeDimensionInterface {
    d0: string,
    d10: string,
    d15: string,
    d20: string,
    d30: string,
    d40: string,
    d50: string,
    d60: string,
    d70: string,
    d80: string,
    d90: string,
    d100: string,
    auto: string,
    drawer: {
        width: number,
        small: number,
        toggler: {
            width: number,
            height: number,
            icon: number
        }
    },
    snackbar: {
        height: number
    },
    navbar: {
        height: number
    },
    carousel: {
        controls: {
            width: number,
            height: number
        }
    },
    checkbox: {
        width: number,
        height: number
    },
    radio: {
        width: number,
        height: number
    }
}

export default ThemeDimensionInterface;