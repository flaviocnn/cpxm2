import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ScrollView,
    FlatList
} from 'react-native';
import Header from './components/Header';
import Cashback from './components/Cashback';
import ListItem from './components/ListItem';

import Constants from 'expo-constants';
import { withFirebaseHOC } from "../../services/GlobalContext";

const imageUrl = { uri: 'https://pbs.twimg.com/profile_images/1212841876895813632/4mzarqqS_400x400.jpg' };
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [
                {
                    icon: 'receipt',
                    description: 'Anagrafica'
                },
                {
                    icon: 'account-box',
                    description: 'Account'
                },
                {
                    icon: 'receipt',
                    description: 'Anagrafica'
                },
                {
                    icon: 'account-box',
                    description: 'Account'
                },
                {
                    icon: 'receipt',
                    description: 'Anagrafica'
                },
                {
                    icon: 'account-box',
                    description: 'Account'
                },
                {
                    icon: 'receipt',
                    description: 'Anagrafica'
                },
                {
                    icon: 'account-box',
                    description: 'Account'
                },
            ]
        }
        this.logoutHandler = this.logoutHandler.bind(this);

    }

    async logoutHandler() {
        this.props.firebase.signOut();
        this.props.navigation.navigate('Accesso');
    }

    renderItems() {
        console.log(this.state.itemList)
        return (
            <SafeAreaView style={styles.listContainer}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.itemList}
                    renderItem={({ item }) => (
                        <ListItem icon={item.icon} description={item.description} />
                    )}
                />
            </SafeAreaView>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/sfondo.jpg')} style={styles.image}>
                    <View style={{ flex: 2 }}>
                        <Header image={imageUrl} name='Dwight' />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Cashback cashback='74,93' />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={this.logoutHandler} style={styles.button}>
                            <Text style={styles.textButton}>INVITA UN AMICO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 6 }}>
                        {this.renderItems()}
                    </View>
                </ImageBackground>

            </View>
        )
    }
}

export default withFirebaseHOC(Profile);

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

