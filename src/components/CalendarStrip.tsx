import {
    StyleSheet,
    View,
} from 'react-native';
import React, { FC, useContext, useEffect, useState } from 'react';
import DateCardSelected from './DateCardSelected';
import DateCardUnselected from './DateCardUnselected';
import { get7DaysFromToday } from '../utils/utilFunction';
import { FilterContext } from '../context/filterConetxt';

const CalendarStrip: FC = ({ }) => {

    const { activeDate, setActiveDate } = useContext(FilterContext);
    const [dateArr, setDateArr] = useState<Date[]>([]);

    useEffect(() => {
        setDateArr(get7DaysFromToday());
    }, []);

    console.log('calendar strip render');

    return (
        <View style={styles.parent}>
            {dateArr?.map((cardDate) => {
                return (
                    cardDate.getDate() === activeDate.getDate() ?
                        <DateCardSelected key={cardDate.getDate()} cardDate={cardDate} setActiveDate={setActiveDate} /> :
                        <DateCardUnselected key={cardDate.getDate()} cardDate={cardDate} setActiveDate={setActiveDate} />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    parent: { flexDirection: 'row', alignSelf: 'flex-start', flex: 1 },
});

export default React.memo(CalendarStrip);
