import moment from 'moment';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { montserrat_bold, montserrat_regular } from '../utils/FontConstant';
import { beach_hut, card_back, clock_icon, double_tick } from '../utils/ImageExporter';
import { white, card_background } from '../utils/colorHexCodes';
import PrimaryButton from './PrimaryButton';
import { FC, useCallback, useContext } from 'react';
import { ListSessionType } from '../types/myTypes';
import React from 'react';
import useFetchList from '../customHooks/useFetchList';
import { ListContext } from '../context/ListContext';
import { sessionListConst } from '../utils/constant';
import DateTimeComp from './DateTimeComp';

type props = {
    item?: ListSessionType,
    funcBook?: (id: string) => void
    isBooked?: boolean,
    showDate?: boolean
}

const SessionCard: FC<props> = ({ item = sessionListConst[9], isBooked = false, funcBook = () => { }, showDate = false }) => {
    !showDate ? console.log('session card render') : console.log('booked section card')

    let d = new Date(item.date);

    return (
        <View style={styles.parentContainer}>
            <Image style={{ position: 'absolute', height: '100%', width: '100%' }} source={card_back} blurRadius={10}></Image>
            <View style={styles.flex1}>
                <View style={styles.padding10}>
                    <Image
                        style={styles.workoutImage}
                        source={beach_hut}
                        resizeMode={'cover'}
                    />
                </View>
            </View>

            <View style={styles.detailContainer}>
                <View style={styles.innerDetailContainer}>
                    <View style={styles.detailSession}>
                        <Text style={styles.textHeadSm}>{item.name}</Text>
                        <Text style={styles.textHeadLg}>{item.type[0].toUpperCase() + item.type.slice(1)}</Text>

                        <View style={styles.time}>
                            {showDate === false ? <View style={styles.imageContainer}>
                                <Image
                                    style={styles.clockImg}
                                    resizeMode="cover"
                                    source={clock_icon} />
                                <Text style={styles.timeText}>{moment(d).format('hh:mm A')}</Text>
                            </View> : <DateTimeComp d={d} />
                            }
                        </View>
                    </View>
                    <View style={styles.bookSession}>
                        <Text style={{ color: white, fontFamily: montserrat_regular }}>{item.category[0].toUpperCase() + item.category.slice(1)}</Text>
                        <View style={styles.buttonContainer}>
                            {
                                isBooked ? <Image style={{ height: '90%', aspectRatio: 1, alignSelf: 'flex-end' }}
                                    source={double_tick} resizeMode='contain'>

                                </Image> :
                                    <PrimaryButton onClick={() => {
                                        if (isBooked === false) {
                                            funcBook(item.date)
                                        }
                                        // fun(item.date)
                                    }
                                    } text={isBooked ? 'booked' : 'book'} />
                            }


                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default React.memo(SessionCard);

const styles = StyleSheet.create({
    parentContainer: {
        height: Dimensions.get('screen').height / 7,
        flexDirection: 'row',
        backgroundColor: card_background,
    },
    workoutImage: { height: '100%', width: '100%' },
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
    clockImg: { width: '18%', aspectRatio: 1 },
    timeText: { marginLeft: 5, color: white, fontFamily: montserrat_regular, marginTop: 0 },
    buttonContainer: { height: '30%', width: '70%' },
    imageContainer: { flexDirection: 'row', alignItems: 'center', flex: 1 },
    textHeadSm: { color: white, fontFamily: montserrat_bold, fontSize: 15 },
    textHeadLg: { color: white, fontFamily: montserrat_regular, marginTop: 3 },
    flex1: {
        flex: 1,
    },
    padding10: { padding: 10 },
});

