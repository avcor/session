import moment from "moment";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { montserrat_bold, montserrat_regular } from "../utils/FontConstant";
import { beach_hut, clock_icon } from "../utils/ImageExporter";
import { white, card_background } from "../utils/colorHexCodes";
import PrimaryButton from "./PrimaryButton";
import { FC } from "react";
import { ListSessionType } from "../types/myTypes";

type props = {
    item: ListSessionType
}

const SessionCard: FC<props> = ({ item }) => {

    let d = new Date(item.date);

    return (
        <View style={styles.parentContainer}>
            <View style={{ flex: 1 }}>
                <View style={{ padding: 10 }}>
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
                        <Text style={{ color: white, fontFamily: montserrat_bold, fontSize: 15 }}>{item.name}</Text>
                        <Text style={{ color: white, fontFamily: montserrat_regular, marginTop: 3 }}>{item.type[0].toUpperCase() + item.type.slice(1)}</Text>

                        <View style={styles.time}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>

                                <Image
                                    style={styles.clockImg}
                                    resizeMode="cover"
                                    source={clock_icon}></Image>
                                <Text style={styles.timeText}>{moment(d).format('hh:mm A')}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bookSession}>
                        <Text style={{ color: white, fontFamily: montserrat_regular }}>{item.category[0].toUpperCase() + item.category.slice(1)}</Text>
                        <View style={{ height: '30%', width: '70%' }}>

                            <PrimaryButton />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


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

export default SessionCard;