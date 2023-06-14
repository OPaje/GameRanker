import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export function WinnerScreen(){

    return(
        <View style = {styles.container}>
            <Text>Winner Works !!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    }

}
)