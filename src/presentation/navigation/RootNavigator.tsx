import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationNavigator } from './AuthenticationStack';

import { AuthorizedNavigator } from './AuthorizedStack';
import { NavigatorContext } from '@context';


export const RootNavigator: React.FC = (props) => {
    const [isAuthoried, setIsAuthorized] = React.useState(false)
    const [tabBarVisible, setTabBarVisible] = React.useState(true)


    const renderStack = () => {
        if (isAuthoried) return <AuthorizedNavigator />
        return <AuthenticationNavigator />
    }
    return (
        <NavigatorContext.Provider value={{ tabBarVisible, setIsAuthorized, setTabBarVisible }}>
            <NavigationContainer>
                {renderStack()}
            </NavigationContainer>
        </NavigatorContext.Provider>
    );
}

