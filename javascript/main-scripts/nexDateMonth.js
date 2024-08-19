export function getNextMonthDate(day) {

    const today = new Date();

    const month = today.getMonth() + 2;
    const year = today.getFullYear();

    const dateformated = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;


    return dateformated;
}