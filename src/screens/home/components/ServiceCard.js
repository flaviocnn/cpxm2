import { View, Dimensions, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const ServiceCard = ({ imageUrl, title, page }) => {
    const image = { uri: imageUrl }
    //Cambiare Image2 con Image

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigator.navigate(page)}>
                <Image source={image} style={styles.image} imageStyle={{ borderRadius: 10 }} />
                <Text style={styles.serviceTitle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ServiceCard;


const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width - 50) / 2,
        height: 200,
        backgroundColor: '#fff',
        marginBottom: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    content: {
        alignItems: 'center',
        textAlign: 'center'
    },
    image: {
        width: (Dimensions.get('window').width - 50) / 2,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    serviceTitle: {
        fontSize: 14,
        color: '#323232',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10
    },
});