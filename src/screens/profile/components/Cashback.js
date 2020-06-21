import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cashback = ({ cashback }) => {
    return (
        <Text style={styles.rootText}>
            <Text style={styles.staticText}>
                {'Il tuo cashback: '}
            </Text>
            <Text style={styles.cashback}>
                {cashback}
            </Text>
            <Text style={styles.euro}>
                {' €'}
            </Text>
        </Text>

    );
}

const styles = StyleSheet.create({
    rootText: {
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    staticText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cashback: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#0779E4'
    },
    euro: {
        fontWeight: 'normal',
        fontSize: 25,
    }
});
export default Cashback;