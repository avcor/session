import { FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { primary_color, black, white } from '../utils/colorHexCodes';
import { numToDat } from '../utils/constant';
import React from 'react';


type props = {
    setActiveDate: any,
    cardDate: Date
}

const DateCardSelected: FC<props> = ({ setActiveDate, cardDate }) => {
    console.log('sel date render');

    return (
        <TouchableOpacity style={[styles.dateCardTouch, styles.selectedDateCardTouch]}
            onPress={() => setActiveDate(cardDate)}>

            <View style={styles.dateContainer}>
                <Text style={styles.blackText}>{cardDate.getDate()}</Text>
                <Text style={styles.blackText}>{numToDat[cardDate.getDay()]}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    dateCardTouch: { height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, marginHorizontal: 3 },
    selectedDateCardTouch: { backgroundColor: primary_color, borderRadius: 15 },
    blackText: { fontSize: 18, color: black },
    whiteText: { fontSize: 18, color: white },
    dateContainer: { justifyContent: 'center', alignItems: 'center' },
});

export default React.memo(DateCardSelected);
