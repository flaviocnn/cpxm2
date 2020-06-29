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
import ListItem from '../components/ListItem';

import Constants from 'expo-constants';
import { withFirebaseHOC } from "../../../services/GlobalContext";
import { UserContext } from '../../../providers/UserProvider';

const imageUrl = { uri: 'https://pbs.twimg.com/profile_images/1212841876895813632/4mzarqqS_400x400.jpg' };

const list = [
    {
        icon: 'receipt',
        title: 'Account',
    },
    {
        icon: 'receipt',
        title: 'Account',
    },
    {
        icon: 'receipt',
        title: 'Account',
    },
    {
        icon: 'receipt',
        title: 'Account',
    },
    {
        icon: 'receipt',
        title: 'Account',
    },
    {
        icon: 'receipt',
        title: 'Account',
    },
    {
        icon: 'receipt',
        title: 'Account',
    },
    {
        icon: 'receipt',
        title: 'Account',
    },
]

function Main(props) {
    const [itemList, setItemList] = useState(list);
    const user = useContext(UserContext);

    const logoutHandler = async () => {
        props.firebase.signOut();
        props.navigation.navigate('Accesso');
    }

    const RenderItems = () => {
        return (
            <SafeAreaView style={styles.listContainer}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={itemList}
                    renderItem={({ item }) => (
                        <ListItem icon={item.icon} title={item.title} navigation={props.navigation} />
                    )}
                />
            </SafeAreaView>
        );
    }
    return (

        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/sfondo.jpg')} style={styles.image}>
                <View style={{ flex: 2 }}>
                    <Header image={imageUrl} name='Dwight' />
                </View>
                <View style={{ flex: 1 }}>
                    <Cashback cashback='74,93' />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={logoutHandler} style={styles.button}>
                        <Text style={styles.textButton}>INVITA UN AMICO</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 6 }}>
                    <RenderItems />
                </View>
            </ImageBackground>

        </View>
    )
}

export default withFirebaseHOC(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* paddingTop: Constants.statusBarHeight, */
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

