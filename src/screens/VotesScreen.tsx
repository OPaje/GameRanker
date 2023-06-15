import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {GameCard} from '../components/Votes/GameCard'
import {Header} from '../components/Votes/Header'
import {clientGetGames} from '../api/api'

export function VotesScreen(){

    const [gameList, setGameList] = useState([{}]) // hook

    useEffect(() =>{

        (async () =>{
            const response = await clientGetGames()
            setGameList(response)
        })()

    },[])

    return (
        <View style = {styles.container}>
            <Header/>
            <ScrollView style={styles.gameArea}>
                {gameList.map(game => GameCard(game))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#191919'
        },
        gameArea:{
            flex: 1,
            paddingTop: 10,
            paddingBottom: 20,
            width: '100%'
        }

    }
)