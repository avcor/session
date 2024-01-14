import { FlatList, StyleSheet } from 'react-native';
import { sessionList } from '../utils/constant';
import React, { FC, useCallback, useEffect, useState } from 'react';
import SessionCard from './SessionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListSessionType } from '../types/myTypes';

type props = {
    searchValue: string;
    activeDate: Date;
};

const filter = (
    myList: ListSessionType[],
    activeDate: Date,
    searchValue: string,
) => {
    return myList.filter(v => {
        let d = new Date(v.date);
        if (
            d.getUTCFullYear() === activeDate.getUTCFullYear() &&
            d.getUTCMonth() === activeDate.getUTCMonth() &&
            d.getUTCDate() === activeDate.getUTCDate() &&
            v.name.includes(searchValue)
        ) {
            console.log('found');
            return true;
        } else {
            return false;
        }
    });
};

const CardComponent: FC<props> = ({ searchValue, activeDate }) => {
    console.log('list render');
    const [list, setList] = useState<ListSessionType[]>([]);

    useEffect(() => {
        const fetchDate = () => {
            AsyncStorage.getItem('list')
                .then(() => {
                    setList(filter(sessionList, activeDate, searchValue));
                })
                .catch(e => {
                    console.error(e);
                });
        };
        fetchDate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setList(filter(sessionList, activeDate, searchValue));
        console.log(filter(sessionList, activeDate, searchValue));
    }, [activeDate, searchValue]);

    const handlePress = useCallback(() => { }, []);

    return (
        <FlatList
            data={list}
            contentContainerStyle={styles.gapStyle}
            renderItem={({ item }) => {
                return <SessionCard item={item} funcBook={handlePress} />;
            }}
        />
    );
};

const styles = StyleSheet.create({
    gapStyle: {
        gap: 30,
    },
});

export default React.memo(CardComponent);
