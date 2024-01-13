import { FC } from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { primary_color, black, white } from "../utils/colorHexCodes"
import React from "react"
import { numToDat } from "../utils/constant"

type props = {
    setActiveDate: any,
    cardDate: Date
}


const DateCardUnselected: FC<props> = ({ setActiveDate, cardDate }) => {
    return (
        <TouchableOpacity style={styles.dateCardTouch}
            onPress={() => setActiveDate(cardDate)}>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={styles.whiteText}>{cardDate.getDate()}</Text>
                <Text style={styles.whiteText}>{numToDat[cardDate.getDay()]}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    dateCardTouch: { height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, marginHorizontal: 3 },
    selectedDateCardTouch: { backgroundColor: primary_color, borderRadius: 15 },
    blackText: { fontSize: 18, color: black, },
    whiteText: { fontSize: 18, color: white },
})

export default React.memo(DateCardUnselected);