export function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
}

export function splitDate(date?: Date) {
    if (!date) return '-'
    return date.toString().split('T')[0]
}