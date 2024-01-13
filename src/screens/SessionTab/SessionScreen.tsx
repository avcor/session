import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import { black, myBackground, purple_light, text_grey, white } from '../../utils/colorHexCodes';
import { roboto_bold } from '../../utils/FontConstant';
import { beach_hut, calendar_icon, clock_icon, profile_photo } from '../../utils/ImageExporter';
import NameHeader from '../../components/NameHeader';
import CalendarStrip from '../../components/CalendarStrip';
import CardComponent from '../../components/CardComponent';

const SessionScreen = () => {

    const [activeDate, setActiveDate] = useState<Date>(new Date());

    return (
        <View style={styles.parent}>
            <View style={{
                flex: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <NameHeader />
            </View>
            <View style={styles.searchBox}>
                <SearchInput />
            </View>

            <View style={{ flex: 0.8, marginTop: '6%' }}>
                <CalendarStrip activeDate={activeDate} setActiveDate={setActiveDate} />
            </View>
            <View style={{ flex: 8, marginTop: 10, }}>
                <CardComponent />
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
        marginTop: 4
    }
});

export default SessionScreen;
