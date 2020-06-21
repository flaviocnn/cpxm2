import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import React from 'react';

const ListItem = ({ icon, description }) => {
    console.log('dentro');
    return (
        <View>
            <TouchableOpacity>
                <View style={styles.container}>
                    <MaterialIcons name={icon} color='#6D6D6D' size={33} />
                    <Text style={styles.text}>{description}</Text>
                    <MaterialIcons name='keyboard-arrow-right' color='#6D6D6D' size={33} />
                </View>
            </TouchableOpacity>
            <View style={styles.separator}></View>
        </View>

    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
    },
    text: {
        color: '#6D6D6D',
        fontSize: 16,
        fontFamily: 'Roboto',
    },
    separator: {
        height: 1.5,
        flex: 1,
        marginTop: 10,
        backgroundColor: '#6D6D6D'
    }
});
