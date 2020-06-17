import React, { Component } from "react";
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";

export default class CategoryCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var category = this.props.categoryItem;

        return (

            <View style={styles.container}>
                <ImageBackground
                source={require('../../assets/taglio-uomo.jpg')} 
                style={styles.image}
                >
                    <Text
                        style={styles.titleText}
                    >
                        {category?.name}
                    </Text>
                </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "blue",
        justifyContent: "center",
        //width:Dimensions.get("screen").width /2 -10,
        //width:"40%",
        height: 120,
        margin: 5,
        borderRadius: 10,
        overflow:"hidden"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    titleText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "black",
        padding: 5
    }
});