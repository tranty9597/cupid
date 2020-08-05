import React from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppImages } from '@assets';
import { TextField, TextView, RoundedButton, IconLabel } from '@components';
import { NavigatorContext } from '@context';

export interface _SignInProps {
    navigation: StackNavigationProp<any>
}

const _SignIn: React.FC<_SignInProps> = (props) => {

    const { setIsAuthorized } = React.useContext(NavigatorContext)

    const onSignInButtonPress = () => {
        setIsAuthorized(true)
    }

    const renderTitle = () => {
        return (
            <View style={_styles.titleContainer}>
                <TextView text='SIGN IN' style={{ fontSize: 20, color: '#EE4E98' }} />
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
                <TextView
                    style={_styles.forgotPassword}
                    text='FORGOT PASSWORD'
                />
                <RoundedButton
                    containerStyle={_styles.button}
                    onPress={onSignInButtonPress}
                    title='SIGN IN'
                />
                <IconLabel
                    prefixIcon={AppImages.EMAIL}
                    text='Remember me?'
                    labelStyle={_styles.rememberText}
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

    const renderSignUpLink = () => {
        return (
            <View style={_styles.signUpLink}>
                <TextView text="Don't have an account?" />
                <TextView style={_styles.signUp} text="SIGN UP" />
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
                {renderSignUpLink()}
            </SafeAreaView>
        </View>
    )
}

export const SignIn = React.memo(_SignIn)

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