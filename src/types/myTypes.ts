export type ListSessionType = {
    name: string;
    date: string;
    type: string;
    category: string;
    isBooked: boolean;
};

export type NumToDayPair = {
    dateVal: Date,
    dayIntials: string,
};

export type DateDayPair = [Date, string]
