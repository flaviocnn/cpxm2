import React, { Component } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import { Button, CheckBox, Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { withFirebaseHOC } from "../../services/GlobalContext";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.signupHandler = this.signupHandler.bind(this);

    }

    async signupHandler() {
        const f = this.props.firebase;
        const email = this.state.email;
        const name = this.state.name;
        const psw = this.state.password;

        f.signupWithEmail(email, psw)
        .then(async (res) =>{
            // signed successfully
            console.log(res);
            // to-do: registra su firestore
            await f.createNewUser( {name,email,password});
            // to-do: naviga alla home
        })
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
                            placeholder="Nome"
                            onChangeText={value => this.setState({ name: value })} 
                        />
                        <Input
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={value => this.setState({ password: value })} 
                        />
                        <Button
                            title="Registrati"
                            onPress={this.signupHandler}
                            titleStyle={styles.buttonTitleStyle}
                            type="clear"
                        />
                        <Button
                            title="Login"
                            onPress={() => {this.props.navigation.navigate('Accedi')}}
                            titleStyle={styles.buttonTitleStyle}
                            type="clear"
                        />
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
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