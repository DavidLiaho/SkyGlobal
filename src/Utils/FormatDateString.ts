export function formatDateString(dateString: string) {
    // Split the input date string by hyphens
    const [year, month, day] = dateString.split('-');

    // Return the formatted date in DD-MM
    return `${day}/${month}`;
}
