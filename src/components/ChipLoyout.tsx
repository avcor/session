import { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Chip } from 'react-native-paper';
import { FilterContext } from '../context/filterConetxt';
import { black, lavendar_purple, primary_color, white } from '../utils/colorHexCodes';
import React from 'react';

type props = {
    closeFunc?: any;
};

const ChipLayout: FC<props> = ({ closeFunc }) => {
    const { setFilterCategoory, filterCategpry } = useContext(FilterContext);

    return (
        <View
            style={styles.Container}>
            <View style={styles.typeContainer}>

                {workoutTpe.map(v => {

                    let applySelect = v === filterCategpry;
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
                    );
                })}
            </View>
            <View style={styles.category}>
                {categoryWorkout.map(v => {
                    let applySelect = v === filterCategpry;
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
            <Button style={styles.buttonClear} onPress={() => {
                setFilterCategoory('');
                closeFunc();
            }}> Clear </Button>
        </View >
    );
};

const styles = StyleSheet.create({
    selected: {
        backgroundColor: lavendar_purple,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unSelected: {
        color: black,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingVertical: 20,
    },
    typeContainer: { flexWrap: 'wrap', flexDirection: 'row' },
    category: { flexWrap: 'wrap', flexDirection: 'row', marginTop: 5 },
    buttonClear: { backgroundColor: primary_color, marginTop: 20 },
});

const workoutTpe = ['personal', 'group', 'webinar'];

const categoryWorkout = ['mobility', 'strength', 'gym', 'cardio'];

export default ChipLayout;
