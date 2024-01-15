import { FlatList, StyleSheet } from 'react-native';
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import SessionCard from './SessionCard';
import useFetchList from '../customHooks/useFetchList';
import { FilterContext } from '../context/filterConetxt';
import { ActivityIndicator, } from 'react-native-paper';
import { ListContext } from '../context/ListContext';


const CardListComponent: FC = ({ }) => {
    console.log('list render');
    const { list, setList, markBookInList } = useContext(ListContext)

    const fun = useCallback((selectedDate: string) => {
        setList((prev) => {
            let ind = -1;
            prev.find((val, i) => {
                if (val.date === selectedDate) {
                    ind = i;
                    return true
                }
            })
            prev[ind].isBooked = true
            markBookInList(selectedDate)
            return [...prev];
        })
    }, [])

    return (
        <>
            <FlatList
                keyExtractor={(item) => item.date + item.name}
                data={list}
                contentContainerStyle={styles.gapStyle}
                renderItem={({ item }) => {
                    return <SessionCard
                        item={item}
                        funcBook={fun}
                        isBooked={item.isBooked} />;
                }}
            />
            {/* <Modal isVisible={isLoading} style={{ flex: 1 }}>
                <ActivityIndicator />
            </Modal> */}
        </>
    );
};

const styles = StyleSheet.create({
    gapStyle: {
        gap: 30,
    },
});

export default React.memo(CardListComponent);
