import React, { Component, useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Account from './pages/Account';

import { withFirebaseHOC } from "../../services/GlobalContext";

const Stack = createStackNavigator();

class Profile extends Component {

    state = {

    }

    componentDidMount() {

    }
    render() {
        return (
            <Stack.Navigator
                initialRouteName="Main"
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        title: 'Profilo',
                        headerStyle: {
                            backgroundColor: '#ffffff',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'normal',
                        },
                    }}
                />
                <Stack.Screen
                    name="Account"
                    component={Account}
                    options={{
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        )
    }
}

export default withFirebaseHOC(Profile);

