import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { colors } from '../../styles/base';

const CategoryCard = props => {
    return (
        <Card /* image={require("../assets/david-armstrong-srpE-a5W418-unsplash.jpg")} */ containerStyle={styles.card}>
            <Image
                source={{ uri: "https://www.luxorcairohotel.it/sites/default/files/styles/slide/public/go_kart_0_0.jpg?itok=33q8_WC3" }}
                style={styles.cardImage}
            />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                    Centro Sportivo Creta Rossa
                </Text>
            </View>

        </Card>

    );
};

const styles = StyleSheet.create({
    card: {
        padding: 0,
        borderRadius: 10,
        flex: 0,
        height: 260
    },
    cardImage: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 140
    },
    cardContent: {
        margin: 20
    },
    cardTitle: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 19,
        lineHeight: 19,
        color: "#323232"
    }

});

export default CategoryCard;