import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import { SignIn, SignUp } from '../container';

const Stack = createStackNavigator()

export const AuthenticationNavigator: React.FC = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen
                name='SignIn'
                component={SignIn}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
            />
        </Stack.Navigator>
    )
}

