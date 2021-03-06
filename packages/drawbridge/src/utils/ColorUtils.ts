function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let b = {r: 0, b: 0, g: 0}

    if (result) {
        b = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
    }

    return b;
}

function decreaseOpacity(hex: string, amount: number) {
    const {r, g, b} = hexToRgb(hex)

    return `rgba(${r}, ${g}, ${b}, ${amount / 100})`;
}

function LightenDarkenColor(col: string, amt: number) {
    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

function lighten(hex: string, amount: number) {
    return LightenDarkenColor(hex, amount);
}

function darken(hex: string, amount: number) {
    return LightenDarkenColor(hex, -amount);
}

export {
    hexToRgb,
    lighten,
    decreaseOpacity
}