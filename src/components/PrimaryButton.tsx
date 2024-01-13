import { Text, View } from "react-native";
import React from "react";
import { black, primary_color } from "../utils/colorHexCodes";
import { montserrat_bold, montserrat_regular } from "../utils/FontConstant";

const PrimaryButton = () => {
    return (
        <View style={{ backgroundColor: primary_color, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, }}>
            <Text style={{ fontFamily: montserrat_regular, color: black }}>Book</Text>
        </View>
    )
}

export default PrimaryButton;