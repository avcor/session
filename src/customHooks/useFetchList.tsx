import { useEffect, useRef, useState } from 'react';
import { ListSessionType } from '../types/myTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sessionListConst } from '../utils/constant';

const useFetchList = (activeDate: Date, searchValue: string, category: string) => {
    const defaultList = useRef(sessionListConst);
    const [list, setList] = useState<ListSessionType[]>([]);

    useEffect(() => {
        setList(filter(defaultList.current, activeDate, searchValue, category));
    }, [activeDate, searchValue, category]);

    useEffect(() => {

        const fetchDate = () => {
            AsyncStorage.getItem('list')
                .then((res) => {
                    if (!res) {
                        let today = new Date();
                        let filteredList = sessionListConst.filter(item => {
                            let iDate = new Date(item.date);
                            return (
                                today.getUTCFullYear() === iDate.getUTCFullYear() &&
                                today.getUTCMonth() === iDate.getUTCMonth() &&
                                today.getUTCDate() === iDate.getUTCDate()
                            );

                        });
                        setList(filteredList);
                    }
                })
                .catch(e => {
                    console.error(e);
                });
        };
        fetchDate();
    }, []);

    return { list, setList };
};



const filter = (
    myList: ListSessionType[],
    activeDate: Date,
    searchValue: string,
    category: string,
) => {
    let t = myList.filter(v => {
        let d = new Date(v.date);
        if (
            d.getUTCFullYear() === activeDate.getUTCFullYear() &&
            d.getUTCMonth() === activeDate.getUTCMonth() &&
            d.getUTCDate() === activeDate.getUTCDate() &&
            v.name.toLowerCase().includes(searchValue.toLowerCase())
            && (v.type.includes(category) || v.category.includes(category))
        ) {
            console.log(v.category)
            return true;
        } else {
            return false;
        }
    });
    console.log(t)
    return t
};

export default useFetchList;
