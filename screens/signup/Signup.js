import React, { Component } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { withFirebaseHOC } from "../../services/GlobalContext";

class Signup extends Component {
    click() {

    }

    render() {
        return (
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

        )
    }
}

export default withFirebaseHOC(Signup);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 50
    },
});