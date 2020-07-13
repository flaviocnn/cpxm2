import { View, Dimensions, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

const CategoryCard = ({ imageUrl, title, page }) => {
    const image = { uri: imageUrl }
    //Cambiare Image2 con Image

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content} onPress={() => navigator.navigate(page)}>
                <ImageBackground source={image} style={styles.image} imageStyle={{ borderRadius: 10 }}>
                    <Text style={styles.staticText}>{title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

export default CategoryCard;


const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        textAlign: 'center'
    },
    image: {
        width: (Dimensions.get('window').width - 50) / 2,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'

    },
    staticText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
});