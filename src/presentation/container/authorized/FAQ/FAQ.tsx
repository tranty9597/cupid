import React from 'react'
import { View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { RoundedButton } from '@components'
import { NavigatorContext } from '@context'

const _FAQ: React.FC = (props) => {
    const { tabBarVisible, setTabBarVisible } = React.useContext(NavigatorContext)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
            <RoundedButton
                title="toggle"
                onPress={() => setTabBarVisible(!tabBarVisible)}
            />
        </SafeAreaView>
    )
}

export const FAQ = React.memo(_FAQ)