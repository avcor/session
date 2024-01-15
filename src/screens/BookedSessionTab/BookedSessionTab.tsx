import { useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import NameHeader from '../../components/NameHeader';
import { myBackground } from '../../utils/colorHexCodes';
import { ListContext } from '../../context/ListContext';
import SessionCard from '../../components/SessionCard';
import React from 'react';

const BookedSessionScreen = () => {
    const { bookedList } = useContext(ListContext);

    useEffect(() => {
        // console.log(bookedList)
    }, [bookedList]);

    return (
        <View style={styles.parent}>
            <View style={styles.headerContainer}>
                <NameHeader smHead="All your" lgHead="Booked Workouts" />
            </View>
            <View style={styles.listContaainer}>
                <FlatList
                    keyExtractor={(item) => item.date + item.name}
                    data={bookedList}
                    contentContainerStyle={styles.gapStyle}
                    renderItem={({ item }) => {
                        return <SessionCard
                            item={item}
                            isBooked={item.isBooked}
                            showDate={true} />;
                    }}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: myBackground,
        paddingHorizontal: 14,
    },
    headerContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gapStyle: {
        gap: 30,
    },
    listContaainer: { flex: 10, marginTop: '10%' },
});


export default BookedSessionScreen;
