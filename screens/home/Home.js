import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet,Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import CategoryCard from '../../components/cards/CategoryCard';
import Repository from '../../services/Repository';
import Constants from 'expo-constants';

export default class Home extends Component {
    getCategories = async () => {
        Repository.categories()
            .then((results) => {
                var categories = [];
                results.forEach(function (doc) {
                    let category = doc.data();
                    category.id = doc.id;
                    categories.push(category);
                    //console.log(doc.id, " => ", doc.data());
                });
                this.setState({ categories })
            })
            .catch(err => console.info(err));
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.id}
            leftAvatar={{
                source: item.avatar_url && { uri: item.avatar_url },
                title: item.name[0]
            }}
            bottomDivider
            chevron
        />
    )

    renderItem2 = ({ item }) => (
        <CategoryCard
            categoryItem={item}
            bottomDivider
            chevron
        />
    )

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Carica Categorie"
                    onPress={this.getCategories}
                />
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state?.categories}
                    renderItem={this.renderItem2}
                    numColumns="2"
                    contentContainerStyle={styles.MainContainer}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    MainContainer: {
        justifyContent: 'center',
        alignItems:"center",
        width: Dimensions.get('screen').width,
        marginHorizontal:5
    },
});

