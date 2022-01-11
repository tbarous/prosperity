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

function lighten(hex, howMuch) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) return;

    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)

    return `rgba(${r}, ${g}, ${b}, ${howMuch})`;
}

function mute(hex) {
    return lighten(hex, 0.7);
}

export {
    hexToRgb,
    lighten,
    mute
}