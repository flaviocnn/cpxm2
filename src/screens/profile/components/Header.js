import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = ({ image, name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={image} style={styles.image} />
                <Text style={styles.rootText}>
                    <Text style={styles.staticText}>
                        {'Ciao'}
                        {'\n'}
                    </Text>
                    <Text style={styles.dynamicText}>
                        {name}
                    </Text>
                </Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 50
    },
    content: {
        flexDirection: "row",

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 10
    },
    rootText: {
        textAlignVertical: 'center',
        marginLeft: 20
    },
    staticText: {
        fontSize: 20,
        fontWeight: '200',
        color: '#fff'
    },
    dynamicText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff'
    }
});
export default Header;