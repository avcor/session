export const get7DaysFromToday = () => {
    let todayDate = new Date();
    let arr1: Date[] = [];

    for (let i = 0; i < 7; i++) {
        const nextDate = new Date(todayDate.getTime() + i * 24 * 60 * 60 * 1000);
        arr1.push(nextDate);
    }
    return arr1
}