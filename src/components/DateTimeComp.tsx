import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import { white } from "../utils/colorHexCodes";
import { montserrat_regular } from "../utils/FontConstant";
import { FC } from "react";

const DateTimeComp: FC<{ d: Date }> = ({ d }) => {
    return (
        <View style={styles.imageContainer}>
            <Text style={[styles.timeText]}>{moment(d).format('DD MMM YY')}</Text>
            <Text style={[styles.timeText, styles.smText]}>{moment(d).format('hh:mm A')}</Text>
        </View>
    )
}

export default DateTimeComp;

const styles = StyleSheet.create({
    imageContainer: { flexDirection: 'column', flex: 1, color: white, fontFamily: montserrat_regular },

    timeText: { color: white, fontFamily: montserrat_regular, marginTop: 0 },
    smText: { fontSize: 11 }
})