import React, { Component } from 'react';

import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Header from './components/Header';
import Constants from 'expo-constants';

const imageUrl = { uri: 'https://pbs.twimg.com/profile_images/1212841876895813632/4mzarqqS_400x400.jpg' };
export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/sfondo.jpg')} style={styles.image}>
                    <View style={{ flex: 2 }}>
                        <Header image={imageUrl} name='Dwight' />
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 6 }}>
                    </View>
                </ImageBackground>

            </View>
        )
    }
}

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

});

