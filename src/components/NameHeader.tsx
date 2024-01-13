import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { black, purple_light, text_grey, white } from '../utils/colorHexCodes';
import { montserrat_bold, montserrat_regular, roboto_bold, roboto_light } from '../utils/FontConstant';

const NameHeader = () => {
    console.log('Name Header Render')
    return (
        <>
            <View style={styles.userDetailsContainer}>
                <Text style={styles.normal_text}>Find your</Text>
                <Text style={styles.bold_text}>Health Session</Text>
            </View>
        </>
    )
}

export default React.memo(NameHeader);

const styles = StyleSheet.create({
    userDetailsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    normal_text: { color: white, fontSize: 20, fontFamily: montserrat_regular },
    bold_text: { color: white, fontSize: 25, fontFamily: montserrat_bold }


})