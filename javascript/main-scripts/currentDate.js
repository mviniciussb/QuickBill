export function today() {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    const dateformated = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    return dateformated
}