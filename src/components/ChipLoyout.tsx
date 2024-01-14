import { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Chip } from 'react-native-paper';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import { FilterContext, FilterProvider } from '../context/filterConetxt';
import { black, lavendar_purple, primary_color, purple_main, white } from '../utils/colorHexCodes';

type props = {
    closeFunc?: any;
};

const ChipLayout: FC<props> = ({ closeFunc }) => {
    const { setFilterCategoory, filterCategpry } = useContext(FilterContext);

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                flexDirection: 'column',
                paddingVertical: 20,
            }}>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>

                {workoutTpe.map(v => {

                    let applySelect = v === filterCategpry
                    return (
                        <Chip
                            key={v}
                            style={applySelect ? styles.selected : styles.unSelected}
                            textStyle={applySelect ? { color: white } : { color: black }}
                            onPress={() => {
                                setFilterCategoory(v);
                                closeFunc();
                            }}>{v}
                        </Chip>
                    )
                })}
            </View>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginTop: 5 }}>
                {categoryWorkout.map(v => {
                    let applySelect = v === filterCategpry
                    return (
                        <Chip
                            key={v}
                            style={applySelect ? styles.selected : styles.unSelected}
                            textStyle={applySelect ? { color: white } : { color: black }}
                            onPress={() => {
                                setFilterCategoory(v);
                                closeFunc();
                            }}>
                            {v}
                        </Chip>
                    );
                })}
            </View>
            <Button style={{ backgroundColor: primary_color, marginTop: 20 }} onPress={() => {
                setFilterCategoory('')
                closeFunc()
            }}> Clear </Button>
        </View >
    );
};

const styles = StyleSheet.create({
    selected: {
        backgroundColor: lavendar_purple,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unSelected: {
        color: black,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const workoutTpe = ['personal', 'group', 'webinar'];

const categoryWorkout = ['mobility', 'strength', 'gym', 'cardio'];

export default ChipLayout;
