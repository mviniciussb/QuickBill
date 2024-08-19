export function closeData() {
    let closing;
    const maturity = Number(document.getElementById('maturity').value);

    if (maturity == 5 || maturity == 10) {
        closing = 20
    } else if (maturity == 15 || maturity == 20) {
        closing = 1
    } else {
        closing = 10
    }

    return closing
}