import React from 'react';
import { StyleSheet, Text, TextProps, View, StyleProp, ViewStyle, Pressable } from 'react-native';


export interface FlatButtonProps extends TextProps {
    containerStyle?: StyleProp<ViewStyle>
    title: string,
    onPress?: () => void
}

const _FlatButton: React.FC<FlatButtonProps> = (props) => {
    const { title, onPress } = props
    return (
        <Pressable
            onPress={onPress}
        >
            <View
                style={StyleSheet.flatten([_styles.container, props.containerStyle])} >
                <Text style={_styles.title}>
                    {title}
                </Text>
            </View >
        </Pressable>
    )

}

const _styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: '600'
    }
})

export const FlatButton = React.memo(_FlatButton)