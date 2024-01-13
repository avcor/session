import {
    View,
    Text,
    Touchable,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { black, primary_color, white } from '../utils/colorHexCodes';
import DateCardSelected from './DateCardSelected';
import DateCardUnselected from './DateCardUnselected';
import { get7DaysFromToday } from '../utils/utilFunction';

type props = {
    activeDate: Date;
    setActiveDate: any;
};

const CalendarStrip: FC<props> = ({ activeDate, setActiveDate }) => {
    const [dateArr, setDateArr] = useState<Date[]>([]);

    useEffect(() => {
        setDateArr(get7DaysFromToday());
    }, []);

    console.log('calendar strip render');

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', flex: 1 }}>
            {dateArr?.map((cardDate, i) => {
                return (
                    cardDate.getDate() === activeDate.getDate() ?
                        <DateCardSelected key={cardDate.getDate()} cardDate={cardDate} setActiveDate={setActiveDate} /> :
                        <DateCardUnselected key={cardDate.getDate()} cardDate={cardDate} setActiveDate={setActiveDate} />
                );
            })}
        </View>
    );
};

export default React.memo(CalendarStrip);
