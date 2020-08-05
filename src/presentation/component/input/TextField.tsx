import React from 'react';
import { View, Image, ImageSourcePropType, TextInputProps, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export interface TextFieldProps {

    containerStyle?: StyleProp<ViewStyle>

    prefixIcon: ImageSourcePropType,
    suffixIcon?: ImageSourcePropType,
    inputProps?: TextInputProps
}

export const TextField: React.FC<TextFieldProps> = (props) => {
    const { containerStyle, prefixIcon, suffixIcon, inputProps = {} } = props

    const renderSuffix = () => {
        if (suffixIcon) {
            return <Image source={suffixIcon} />
        }
        return null
    }

    return (
        <View style={[_styles.container, containerStyle]}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={prefixIcon} />
                <View style={{ width: 16 }} />
                <TextInput
                    {...inputProps}
                    style={[{ flex: 1 }, inputProps.style]}
                />
                {renderSuffix()}
            </View>
            <View style={_styles.divider} />
        </View>
    )
}

const _styles = StyleSheet.create({
    container: {

    },
    divider: {
        height: 1,
        marginTop: 8,
        width: '100%',
        backgroundColor: '#F1F3F8'
        // backgroundColor: 'black'
    }
})