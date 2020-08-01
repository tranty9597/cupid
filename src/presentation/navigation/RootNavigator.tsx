import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthenticationNavigator } from './AuthenticationStack';

export const RootNavigator: React.FC = (props) => {
    return (
        <NavigationContainer>
            <AuthenticationNavigator />
        </NavigationContainer>
    );
}

