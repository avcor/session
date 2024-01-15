import { StyleSheet, View } from 'react-native';
import React from 'react';
import SearchInput from './SearchInput';
import { myBackground } from '../../utils/colorHexCodes';
import NameHeader from '../../components/NameHeader';
import CalendarStrip from '../../components/CalendarStrip';
import CardListComponent from '../../components/CardListComponent';

const SessionScreen = () => {

    return (
        <View style={styles.parent}>
            <View style={styles.headerContainer}>
                <NameHeader />
            </View>
            <View style={styles.searchBox}>
                <SearchInput />
            </View>

            <View style={styles.calendarStripContainer}>
                <CalendarStrip />
            </View>
            <View style={styles.listContainer}>
                <CardListComponent />
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
    searchBox: {
        flex: 0.6,
        alignItems: 'center',
        marginTop: 4,
    },
    headerContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarStripContainer: { flex: 0.8, marginTop: '6%' },
    listContainer: { flex: 8, marginTop: 10 },
});

export default SessionScreen;
