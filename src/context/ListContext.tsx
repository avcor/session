import { FC, createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ListSessionType } from '../types/myTypes';
import { FilterContext } from './filterConetxt';
import { sessionListConst } from '../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { filter } from '../utils/utilFunction';
import React from 'react';

type myContextData = {
    list: ListSessionType[];
    setList: React.Dispatch<React.SetStateAction<ListSessionType[]>>;
    bookedList: ListSessionType[];
    setBookedList: any;
    markBookInList: any;
};

export const ListContext = createContext<myContextData>({
    list: [],
    setList: () => { },
    bookedList: [],
    setBookedList: () => { },
    markBookInList: () => { },
});

export const ListProvider: FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const defaultList = useRef(sessionListConst);
    const [list, setList] = useState<ListSessionType[]>([]);
    const [bookedList, setBookedList] = useState<ListSessionType[]>([]);

    const { filterCategpry: category, filterStr: searchValue, activeDate } = useContext(FilterContext);

    useEffect(() => {
        const fetchDate = () => {
            AsyncStorage.getItem('list')
                .then((res) => {
                    if (!res) {
                        let today = new Date();
                        let tmpBookedList = [];
                        let filteredList = sessionListConst.filter(item => {

                            if (item.isBooked === true) {
                                tmpBookedList.push(item);
                            }

                            let iDate = new Date(item.date);
                            return (
                                today.getFullYear() === iDate.getFullYear() &&
                                today.getMonth() === iDate.getMonth() &&
                                today.getDate() === iDate.getDate()
                            );

                        });
                        setList(filteredList);
                    }
                })
                .catch((e: any) => {
                    console.error(e);
                });
        };
        fetchDate();

        return () => {
            // make async call over here
        };
    }, []);

    useEffect(() => {
        setList(filter(defaultList.current, activeDate, searchValue, category));
    }, [activeDate, searchValue, category]);

    const markBookInList = useCallback((selectedDate: string) => {
        let bookedTmp: ListSessionType[] = [];

        defaultList.current = defaultList.current.map((v) => {
            if (v.date === selectedDate) {
                v.isBooked = true;
                bookedTmp.push({ ...v });
                return { ...v };
            }
            if (v.isBooked === true) {
                bookedTmp.push({ ...v });
            }
            return v;
        });

        setBookedList(() => {
            return ([...bookedTmp]);
        });

    }, []);

    return (
        <ListContext.Provider value={{ list, setList, bookedList, setBookedList, markBookInList }}>
            {children}
        </ListContext.Provider>
    );
};

