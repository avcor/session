import { FlatList, StyleSheet } from 'react-native';
import React, { FC, useCallback, useContext, useEffect } from 'react';
import SessionCard from './SessionCard';
import useFetchList from '../customHooks/useFetchList';
import { FilterContext } from '../context/filterConetxt';

type props = {
    activeDate: Date;
};



const CardListComponent: FC<props> = ({ activeDate }) => {
    console.log('list render');
    const { filterCategpry, filterStr } = useContext(FilterContext);
    const { list } = useFetchList(activeDate, filterStr, filterCategpry);

    const handlePress = useCallback(() => {

    }, []);

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

export default React.memo(CardListComponent);
