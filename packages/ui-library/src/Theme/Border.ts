export const borderExample: Border = {
    radius: {
        primary: '4px',
        secondary: '8px'
    }
}

interface Border {
    radius: {
        primary: string
        secondary: string
    }
}

export default Border;