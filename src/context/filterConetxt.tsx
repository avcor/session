import { FC, createContext, useEffect, useState } from 'react';

type myConetxtData = {
    filterStr: string;
    setFilterStr: any;
    filterCategpry: string;
    setFilterCategoory: any;
    activeDate: Date;
    setActiveDate: any
};

export const FilterContext = createContext<myConetxtData>({
    filterStr: '',
    setFilterStr: () => { },
    filterCategpry: '',
    setFilterCategoory: () => { },
    activeDate: new Date(),
    setActiveDate: () => { }
});

export const FilterProvider: FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [filterStr, setFilterStr] = useState('');
    const [filterCategpry, setFilterCategoory] = useState('');
    const [activeDate, setActiveDate] = useState(new Date())

    useEffect(() => {
        console.log('categoty ' + filterCategpry);
    }, [filterCategpry]);
    return (
        <FilterContext.Provider
            value={{ filterStr, setFilterStr, filterCategpry, setFilterCategoory, activeDate, setActiveDate }}>
            {children}
        </FilterContext.Provider>
    );
};
