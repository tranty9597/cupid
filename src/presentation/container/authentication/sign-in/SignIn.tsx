import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';

import {AppImages} from '@assets';
import {
  TextField,
  TextView,
  RoundedButton,
  IconLabel,
  FullScreenLoadingIndicator,
  TextFieldHandles,
} from '@components';
import {NavigatorContext} from '@context';
import {AppMoudle} from '@di';

export interface _SignInProps {
  navigation: StackNavigationProp<any>;
}

const _SignIn: React.FC<_SignInProps> = (props) => {
  const mountedRef = React.useRef(false);
  const passwordRef = React.useRef<TextFieldHandles>(null);
  const {setIsAuthorized, username} = React.useContext(NavigatorContext);
  const [phone, setPhone] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const onSignInButtonPress = async () => {
    try {
      setLoading(true);
      const result = await AppMoudle.shared.datasource.signIn({
        phoneNumber: phone,
        firebaseToken: {
          key: 'sdfdsf',
          code: '221117',
        },
      });
      AppMoudle.shared.apiProvider.setToken(result.token);
      await AppMoudle.shared.localAuthenticationDataSource.saveToken(
        result.token,
      );
      setIsAuthorized(true);
    } catch (error) {
      console.warn('Faile');
    } finally {
      if (mountedRef.current) {
        setLoading(false);
      }
    }
  };

  const renderTitle = () => {
    return (
      <View style={_styles.titleContainer}>
        <TextView text="SIGN IN" style={{fontSize: 20, color: '#EE4E98'}} />
      </View>
    );
  };

  const renderForm = () => {
    return (
      <View style={_styles.form}>
        <TextField
          containerStyle={_styles.input}
          prefixIcon={AppImages.EMAIL}
          inputProps={{
            onChangeText: setPhone,
            placeholder: 'Phone number',
            onSubmitEditing: () => passwordRef.current?.focus(),
          }}
        />
        <TextField
          ref={passwordRef}
          containerStyle={_styles.input}
          prefixIcon={AppImages.EMAIL}
          suffixIcon={AppImages.EMAIL}
          inputProps={{
            placeholder: 'Password',
            secureTextEntry: true,
          }}
        />
        <TextView style={_styles.forgotPassword} text="FORGOT PASSWORD" />
        <RoundedButton
          containerStyle={_styles.button}
          onPress={onSignInButtonPress}
          title="SIGN IN"
        />
        <IconLabel
          prefixIcon={AppImages.EMAIL}
          text="Remember me?"
          labelStyle={_styles.rememberText}
        />
        <FullScreenLoadingIndicator visible={isLoading} />
      </View>
    );
  };

  const renderSocial = () => {
    return (
      <View style={_styles.socialContainer}>
        <TextView text="Or connect with" />
        <View style={_styles.socialRow}>
          <Image source={AppImages.FACEBOOK} />
          <Image style={_styles.socialButton} source={AppImages.GOOGLE} />
          <Image source={AppImages.TWITTER} />
        </View>
      </View>
    );
  };

  const renderSignUpLink = () => {
    return (
      <View style={_styles.signUpLink}>
        <TextView text="Don't have an account?" />
        <TextView style={_styles.signUp} text="SIGN UP" />
      </View>
    );
  };

  return (
    <View style={_styles.content}>
      <Image
        style={{position: 'absolute', top: 0, left: 0, right: 0, width: '100%'}}
        source={AppImages.PINK_CURVED}
      />
      <SafeAreaView style={_styles.container}>
        <TextView text={`username = ${username}`} />
        <NavigatorContext.Consumer>
          {(state) => {
            return <TextView text={`tabBarVisible = ${state.tabBarVisible}`} />;
          }}
        </NavigatorContext.Consumer>
        {renderTitle()}
        {renderForm()}
        {renderSocial()}
        {renderSignUpLink()}
      </SafeAreaView>
    </View>
  );
};

export const SignIn = React.memo(_SignIn);

const _styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: 100,
  },
  form: {},
  input: {
    marginVertical: 24,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  button: {
    marginVertical: 16,
  },
  rememberText: {
    color: '#3BD4E4',
  },
  socialContainer: {
    alignItems: 'center',
  },
  socialRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialButton: {
    marginHorizontal: 8,
  },
  signUpLink: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUp: {
    color: '#EE4E9B',
  },
});
