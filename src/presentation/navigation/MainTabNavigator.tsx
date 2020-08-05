import React from 'react'
import { Image, LayoutAnimation, Platform, UIManager } from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'

import { AppImages } from '@assets';

import { Home } from '../container';
import { NavigatorContext } from '@context';

const Tab = createBottomTabNavigator();

const _MainTabNavigator: React.FC = (props) => {
    const { tabBarVisible } = React.useContext(NavigatorContext)

    React.useLayoutEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    }, [tabBarVisible])

    return (
        <Tab.Navigator tabBar={props => {
            if (!tabBarVisible) return null
            return <BottomTabBar
                {...props}
            />
        }}>
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Image source={AppImages.EMAIL} />,
                    tabBarLabel: 'Bảng tin'
                }}
                name="NewFeeds"
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Image source={AppImages.EMAIL} />
                }}
                name="CircleDate"
                component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Image source={AppImages.EMAIL} />
                }}
                name="Home"
                component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Image source={AppImages.EMAIL} />
                }}
                name="Messenger"
                component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Image source={AppImages.EMAIL} />
                }}
                name="Settings"
                component={Home} />
        </Tab.Navigator>
    );
}

export const MainTabNavigator = React.memo(_MainTabNavigator)
