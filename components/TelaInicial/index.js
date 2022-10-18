import React from "react";
import { View, Text, Image } from "react-native";
import logoX from '../../assets/logo.png';

export default function TelaInicial () {
    return(
        <View>
            <Image
                source={logoX}
            />
        </View>
    )
}