import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
export default class Home extends Component {
    click() {

    }

    render() {
        return (
            <View style={{ marginTop: StatusBar.currentHeight }}>
                <CategoryCard />
            </View>

        )
    }
}