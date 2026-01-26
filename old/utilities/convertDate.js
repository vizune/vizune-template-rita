export function convertDate(date) {
    const format = new Date(date);
    return `${format.getDate()}/${format.getMonth() + 1}/${format.getFullYear()}`;
}