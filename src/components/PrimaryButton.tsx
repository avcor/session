import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { black, primary_color } from '../utils/colorHexCodes';
import { montserrat_regular } from '../utils/FontConstant';

type props = {
    onClick: () => void,
    text: string,
}

const PrimaryButton: FC<props> = ({ onClick, text }) => {
    return (
        <TouchableOpacity onPress={onClick}
            style={styles.touchContainer}>
            <View>
                <Text style={{ fontFamily: montserrat_regular, color: black }}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchContainer: { backgroundColor: primary_color, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10 },
});
export default PrimaryButton;
