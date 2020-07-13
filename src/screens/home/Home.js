import React, { Component, useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    TouchableOpacity,
    Text,
    TouchableHighlight,
    View,
    Modal,
    StyleSheet,
    Dimensions
} from 'react-native';

import HomeScreen from './pages/Main';

import { withFirebaseHOC } from "../../services/GlobalContext";
const HomeStack = createStackNavigator();
class HomeStackScreen extends Component {

    state = {
        modalVisible: false
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <HomeStack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <HomeStack.Screen name="Home" component={HomeScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: '#323232',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => alert('This is a button!')}
                                style={{ paddingRight: 20 }}
                            >
                                <MaterialIcons name="notifications-none" color='#323232' size={30} />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (
                            <View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        Alert.alert("Modal has been closed.");
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalText}>Hello World!</Text>

                                            <TouchableHighlight
                                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={() => {
                                                    this.setModalVisible(!modalVisible);
                                                }}
                                            >
                                                <Text style={styles.textStyle}>Hide Modal</Text>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                </Modal>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} onPress={() => { this.setModalVisible(true) }}>
                                    <Text style={{ fontSize: 16, color: '#323232' }}>{'Benevento'}</Text>
                                    <MaterialIcons name="keyboard-arrow-down" color='#323232' size={35} />
                                </TouchableOpacity>
                            </View>

                        ),

                        headerTitleAlign: 'left'
                    }} />
            </HomeStack.Navigator>
        )
    }
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default withFirebaseHOC(HomeStackScreen);

