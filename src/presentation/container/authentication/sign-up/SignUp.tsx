import React from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppImages } from '@assets';
import { TextField, TextView, RoundedButton, IconLabel, FlatButton } from '@components';

export interface _SignUpProps {
    navigation: StackNavigationProp<any>
}

const _SignUp: React.FC<_SignUpProps> = (props) => {

    const renderTitle = () => {
        return (
            <View style={_styles.titleContainer}>
                <TextView text='SIGN UP' style={{ fontSize: 20, color: '#EE4E98' }} />
            </View>
        )
    }

    const renderForm = () => {
        return (
            <View style={_styles.form}>
                <TextField
                    containerStyle={_styles.input}
                    prefixIcon={AppImages.EMAIL}
                    inputProps={{
                        placeholder: 'Name',
                    }}
                />
                <TextField
                    containerStyle={_styles.input}
                    prefixIcon={AppImages.EMAIL}
                    inputProps={{
                        placeholder: 'Email',
                        keyboardType: 'email-address',
                    }}
                />

                <TextField
                    containerStyle={_styles.input}
                    prefixIcon={AppImages.EMAIL}
                    suffixIcon={AppImages.EMAIL}
                    inputProps={{
                        placeholder: 'Password',
                        keyboardType: 'number-pad',
                        secureTextEntry: true,
                    }}
                />

                <TextField
                    containerStyle={_styles.input}
                    prefixIcon={AppImages.EMAIL}
                    suffixIcon={AppImages.EMAIL}
                    inputProps={{
                        placeholder: 'Confirm Password',
                        keyboardType: 'number-pad',
                        secureTextEntry: true,
                    }}
                />

                <RoundedButton
                    containerStyle={_styles.button}
                    onPress={() => props.navigation.navigate('SignUp')}
                    title='SIGN UP'
                />
                <FlatButton
                    onPress={() => props.navigation.pop()}
                    title='SIGN IN'
                />
            
            </View>
        )
    }

    const renderSocial = () => {
        return (
            <View style={_styles.socialContainer}>
                <TextView text='Or connect with' />
                <View style={_styles.socialRow}>
                    <Image source={AppImages.FACEBOOK} />
                    <Image style={_styles.socialButton} source={AppImages.GOOGLE} />
                    <Image source={AppImages.TWITTER} />
                </View>
            </View>
        )
    }

    return (
        <View style={_styles.content}>
            <Image style={{ position: 'absolute', top: 0, left: 0, right: 0, width: '100%' }} source={AppImages.PINK_CURVED} />
            <SafeAreaView style={_styles.container}>
                {renderTitle()}
                {renderForm()}
                {renderSocial()}
            </SafeAreaView>
        </View>
    )
}

export const SignUp = React.memo(_SignUp)

const _styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: "space-between"
    },
    titleContainer: {
        marginTop: 100
    },
    form: {

    },
    input: {
        marginVertical: 24
    },
    forgotPassword: {
        alignSelf: 'flex-end'
    },
    button: {
        marginVertical: 16
    },
    rememberText: {
        color: '#3BD4E4'
    },
    socialContainer: {
        alignItems: 'center'
    },
    socialRow: {
        flexDirection: 'row',
        marginTop: 20
    },
    socialButton: {
        marginHorizontal: 8
    },
    signUpLink: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    signUp: {
        color: '#EE4E9B'
    }
})