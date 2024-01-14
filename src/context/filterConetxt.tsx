import { FC, createContext, useEffect, useState } from "react";

type myConetxtData = {
    filterStr: string,
    setFilterStr: any,
    filterCategpry: string,
    setFilterCategoory: any,
}

export const
    FilterContext = createContext<myConetxtData>({
        filterStr: '',
        setFilterStr: () => { },
        filterCategpry: '',
        setFilterCategoory: () => { }
    });

export const FilterProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [filterStr, setFilterStr] = useState('');
    const [filterCategpry, setFilterCategoory] = useState('');

    useEffect(() => {
        console.log('categoty ' + filterCategpry)
    }, [filterCategpry])
    return (
        <FilterContext.Provider value={{ filterStr, setFilterStr, filterCategpry, setFilterCategoory }}>
            {children}
        </FilterContext.Provider>
    )
}