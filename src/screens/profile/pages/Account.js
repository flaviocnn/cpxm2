import React, { Component, useContext, useState } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Text,
    SafeAreaView,
    FlatList
} from 'react-native';
import Header from '../components/Header';
import Cashback from '../components/Cashback';

import Constants from 'expo-constants';
import { withFirebaseHOC } from "../../../services/GlobalContext";


function Account(props) {

    return (

        <View style={styles.container}>

            <View style={{ flex: 2 }}>

            </View>
            <View style={{ flex: 1 }}>
                <Cashback cashback='74,93' />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>


            </View>
            <View style={{ flex: 6 }}>

            </View>

        </View>
    )
}

export default withFirebaseHOC(Account);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        height: Dimensions.get('window').height,
    },
    button: {
        borderRadius: 30,
        height: 45,
        backgroundColor: "#0779E4",
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    listContainer: {
        paddingHorizontal: 20
    }

});

