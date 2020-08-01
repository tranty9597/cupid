import React from 'react';
import { View, Image, ImageSourcePropType, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export interface TextFieldProps {
    prefixIcon: ImageSourcePropType,
    suffixIcon?: ImageSourcePropType,
    inputProps?: TextInputProps
}

export const TextField: React.FC<TextFieldProps> = (props) => {
    const { prefixIcon, suffixIcon, inputProps = {} } = props

    const renderSuffix = () => {
        if (suffixIcon) {
            return <Image source={suffixIcon} />
        }
        return null
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <Image source={prefixIcon} />
            <View style={{ width: 16 }} />
            <TextInput
                {...inputProps}
                style={[{ flex: 1, backgroundColor: 'red' }, inputProps.style]}
            />
            {renderSuffix()}
        </View>
    )
}