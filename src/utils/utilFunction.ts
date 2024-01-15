import { ListSessionType } from "../types/myTypes";

export const get7DaysFromToday = () => {
    let todayDate = new Date();
    let arr1: Date[] = [];

    for (let i = 0; i < 7; i++) {
        const nextDate = new Date(todayDate.getTime() + i * 24 * 60 * 60 * 1000);
        arr1.push(nextDate);
    }
    return arr1
}

export const filter = (
    myList: ListSessionType[],
    activeDate: Date,
    searchValue: string,
    category: string,
) => {
    let t = myList.filter(v => {
        let d = new Date(v.date);
        if (
            d.getFullYear() === activeDate.getFullYear() &&
            d.getMonth() === activeDate.getMonth() &&
            d.getDate() === activeDate.getDate() &&
            v.name.toLowerCase().includes(searchValue.toLowerCase())
            && (v.type.includes(category) || v.category.includes(category))
        ) {
            return true;
        } else {
            return false;
        }
    });
    return t
};