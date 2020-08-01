import React from 'react';
import { StyleSheet, Text, TextProps, View, StyleProp, ViewStyle, Pressable } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export interface RoundedButtonProps extends TextProps {
    containerStyle?: StyleProp<ViewStyle>
    title: string,
    onPress?: () => void
}

const _RoundedButton: React.FC<RoundedButtonProps> = (props) => {
    const { title, onPress } = props
    return (
        <Pressable
            onPress={onPress}
        >
            <LinearGradient
                colors={['#EE4E9B', '#D06767']}
                style={StyleSheet.flatten([_styles.container, props.containerStyle])} >
                <Text style={_styles.title}>
                    {title}
                </Text>
            </LinearGradient >
        </Pressable>
    )

}

const _styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: '600'
    }
})

export const RoundedButton = React.memo(_RoundedButton)