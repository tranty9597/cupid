import React from 'react';
import { View, Image, ImageSourcePropType, TextInputProps, Button } from 'react-native';
import { AppImages } from '../../../../assets';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextField } from '../../../common';
import { StackNavigationProp } from '@react-navigation/stack';

export interface _SignInProps {
    navigation: StackNavigationProp<any>
}

const _SignIn: React.FC<_SignInProps> = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Image style={{ position: 'absolute', top: 0, left: 0, right: 0, width: '100%' }} source={AppImages.PINK_CURVED} />
            <SafeAreaView>
                <TextField
                    prefixIcon={AppImages.EMAIL}
                    inputProps={{
                        placeholder: 'Email',
                        keyboardType: 'email-address',
                    }}
                />
                <TextField
                    prefixIcon={AppImages.EMAIL}
                    suffixIcon={AppImages.EMAIL}
                    inputProps={{
                        placeholder: 'Password',
                        keyboardType: 'number-pad',
                        secureTextEntry: true,
                        style: { backgroundColor: 'blue' }
                    }}
                />
                <Button title='SignIn' onPress={() => props.navigation.navigate('SignUp')} />
            </SafeAreaView>
        </View>
    )
}

export const SignIn = React.memo(_SignIn)