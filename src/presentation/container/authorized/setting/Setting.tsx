import React from 'react'
import { View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { RoundedButton, TextView } from '@components'
import { NavigatorContext } from '@context'

const _Setting: React.FC = (props) => {
    const { tabBarVisible, setTabBarVisible } = React.useContext(NavigatorContext)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        </SafeAreaView>
    )
}

export const Setting = React.memo(_Setting)