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
            style={styles.parentContainer}>
            <View style={styles.categoryContainer}>

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
            <View style={styles.typeContainer}>
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
            <Button style={styles.clearButton} onPress={() => {
                setFilterCategoory('');
                closeFunc();
            }}> Clear </Button>
        </View >
    );
};

const styles = StyleSheet.create({
    parentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingVertical: 20,
    },
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
    categoryContainer: { flexWrap: 'wrap', flexDirection: 'row' },
    typeContainer: { flexWrap: 'wrap', flexDirection: 'row', marginTop: 5 },
    clearButton: { backgroundColor: primary_color, marginTop: 20 },
});

const workoutTpe = ['personal', 'group', 'webinar'];

const categoryWorkout = ['mobility', 'strength', 'gym', 'cardio'];

export default ChipLayout;
