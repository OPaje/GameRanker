import React from  'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {gameInterface} from '../../interfaces/gameInterface'


export function Winner(props: gameInterface | any){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}</Text>

            <Image 
                style={styles.card}
                source={{uri:props.cover}}
            />

            <Text style={styles.gameLabel}>Votes: {props.votes}</Text>
            <Text style={styles.winnerLabel}>WINNER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        color: '#fff',
        backgroundColor: '#191919',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 30
    },
    gameLabel:{
        color:'#fff',
        textAlign:'center',
        fontSize:22
    },
    winnerLabel:{
        backgroundColor:'#0EC244',
        borderRadius:4,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:30,
        padding:10
    },
    card:{
        borderRadius:10,
        width:200,
        height:300
    },
    title:{
        color:'#fff',
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:20
    }
})