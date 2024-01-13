import {
    FlatList,
    View,
    Dimensions,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { beach_hut, clock_icon } from '../utils/ImageExporter';
import { sessionList } from '../utils/constant';
import { black, card_background, white } from '../utils/colorHexCodes';
import { montserrat_bold, montserrat_regular } from '../utils/FontConstant';
import moment from 'moment';
import React, { useEffect } from 'react';
import PrimaryButton from './PrimaryButton';
import SessionCard from './SessionCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardComponent = () => {
    console.log('list render')

    useEffect(() => {
        AsyncStorage.getItem('list')
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.error(e);
            })
    }, [])

    return (
        <FlatList
            data={sessionList}
            initialNumToRender={10}
            contentContainerStyle={{ gap: 30 }}
            renderItem={i => {

                return (
                    <SessionCard item={i.item} />
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    parentContainer: {
        height: Dimensions.get('screen').height / 7,
        flexDirection: 'row',
        backgroundColor: card_background,
    },
    workoutImage: { height: '100%', width: '100%', },
    detailContainer: { flex: 2, flexDirection: 'row' },
    innerDetailContainer: { flex: 1, flexDirection: 'row', margin: 10 },
    detailSession: {
        flex: 1,
        flexDirection: 'column',
    },
    bookSession: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    time: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    clockImg: { width: '18%', aspectRatio: 1, },
    timeText: { marginLeft: 5, color: white, fontFamily: montserrat_regular, marginTop: 0, },
});

export default React.memo(CardComponent);
