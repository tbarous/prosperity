export const spacingExample: Spacing = {
    padding: {
        sm: '.8rem',
        md: '1.2rem',
        lg: '1.6rem',
    },
    margin: {
        sm: '.8rem',
        md: '1.2rem',
        lg: '1.6rem'
    },
    width: {
        sm: '.8rem',
        md: '1.2rem',
        lg: '1.6rem',
        full: '100%'
    }
}

interface Spacing {
    padding: {
        sm: string,
        md: string,
        lg: string
    },
    margin: {
        sm: string,
        md: string,
        lg: string
    },
    width: {
        sm: string,
        md: string,
        lg: string,
        full: string
    }
}

export default Spacing;