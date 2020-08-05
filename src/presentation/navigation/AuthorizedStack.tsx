import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import { MainTabNavigator } from './MainTabNavigator';
import { FAQ } from '../container';

const Stack = createStackNavigator()

export const AuthorizedNavigator: React.FC = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen
                name='MainTabNavigator'
                component={MainTabNavigator}
            />
            <Stack.Screen
                name='FAQ'
                component={FAQ}
            />
        </Stack.Navigator>
    )
}

