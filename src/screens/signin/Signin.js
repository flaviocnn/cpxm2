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

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.loginHandler = this.loginHandler.bind(this);

    }

    async loginHandler() {
        const email = this.state.email;
        const psw = this.state.password;
        this.props.firebase.loginWithEmail(email, psw)
            .then((res) => {
                // logged successfully
                console.log(res);
                this.props.navigation.goBack();
/*                 this.props.navigation.navigate('Home');
 */            })
            .catch((reason) => {
                // c'è n problema
                console.info(reason);
            })
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/bg2.png')} style={styles.image}>
                <KeyboardAvoidingView style={styles.container} enabled behavior="padding">
                    <ScrollView>
                        <Input
                            placeholder="Email"
                            onChangeText={value => this.setState({ email: value })}
                        />
                        <Input
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={value => this.setState({ password: value })}
                        />
                        <Button
                            title="Login"
                            onPress={this.loginHandler}
                            titleStyle={styles.buttonTitleStyle}
                            type="clear"
                        />
                        <Button
                            title="Registrati"
                            onPress={() => { this.props.navigation.navigate('Registrati') }}
                            titleStyle={styles.buttonTitleStyle}
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
    buttonTitleStyle: {
        color: "#039BE5",
        fontWeight: "400",
        textTransform: "uppercase"
    }
});