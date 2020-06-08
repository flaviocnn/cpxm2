import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    ImageBackground,
    Dimensions
} from "react-native";
import { Button, CheckBox, Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { withFirebaseHOC } from "../../services/GlobalContext";


class Signin extends Component {

    click() {

    }

    render() {
        return (
            <ImageBackground source={require('../../assets/bg2.png')} style={styles.image}>
            <KeyboardAvoidingView style={styles.container} enabled behavior="padding">
                    <ScrollView>
                        <Input placeholder="Password" secureTextEntry={true} />
                        <Button
                            title="Have an account? Login"
                            onPress={this.click()}
                            titleStyle={{
                                color: "#039BE5"
                            }}
                            type="clear"
                        />
                    </ScrollView>
            </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}
export default withFirebaseHOC(Signin);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#fff",
        marginTop: 50
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        height: Dimensions.get('window').height,
    },
});