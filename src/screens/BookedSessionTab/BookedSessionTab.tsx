import { useEffect } from "react"
import { View, StyleSheet } from "react-native"
import CalendarStrip from "../../components/CalendarStrip"
import CardListComponent from "../../components/CardListComponent"
import NameHeader from "../../components/NameHeader"
import { myBackground } from "../../utils/colorHexCodes"
import SearchInput from "../SessionTab/SearchInput"

const BookedSessionScreen = () => {
    useEffect(() => {
        console.log('booked Session')
    })
    return (
        <View style={styles.parent}>
            <View style={styles.headerContainer}>
                <NameHeader lgHead="Booked Workouts" />
            </View>
            <View style={{ flex: 10 }}>

            </View>

        </View>
    )
}

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
});

export default BookedSessionScreen