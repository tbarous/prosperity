export const fontExample: Font = {
    size: {
        sm: '.8rem',
        md: '1.2rem',
        lg: '1.6rem'
    },
    family: {
        primary: 'OpenSans',
        secondary: 'Trebuchet'
    }
}

interface Font {
    size: {
        sm: string,
        md: string,
        lg: string
    },
    family: {
        primary: string,
        secondary: string
    }
}

export default Font;