import { useContext, useEffect, useRef, useState } from 'react';
import { ListSessionType } from '../types/myTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sessionListConst } from '../utils/constant';
import { ListContext } from '../context/ListContext';
import { FilterContext } from '../context/filterConetxt';

const useFetchList = () => {
    const defaultList = useRef(sessionListConst);
    const [list, setList] = useState<ListSessionType[]>([]);
    const { filterCategpry: category, filterStr: searchValue, activeDate } = useContext(FilterContext);

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
                                today.getFullYear() === iDate.getFullYear() &&
                                today.getMonth() === iDate.getMonth() &&
                                today.getDate() === iDate.getDate()
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
            d.getFullYear() === activeDate.getFullYear() &&
            d.getMonth() === activeDate.getMonth() &&
            d.getDate() === activeDate.getDate() &&
            v.name.toLowerCase().includes(searchValue.toLowerCase())
            && (v.type.includes(category) || v.category.includes(category))
        ) {
            console.log(v.category)
            return true;
        } else {
            return false;
        }
    });
    return t
};

export default useFetchList;
