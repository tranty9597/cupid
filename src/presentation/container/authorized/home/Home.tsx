import React from 'react'
import { View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { RoundedButton } from '@components'
import { NavigatorContext } from '@context'

const _Home: React.FC = (props) => {
    const { tabBarVisible, setTabBarVisible } = React.useContext(NavigatorContext)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
            <RoundedButton
                title="toggle"
                onPress={() => setTabBarVisible(!tabBarVisible)}
            />
            <RoundedButton
                title="FAQ"
                onPress={() => props.navigation.navigate('FAQ')}
            />
        </SafeAreaView>
    )
}

export const Home = React.memo(_Home)