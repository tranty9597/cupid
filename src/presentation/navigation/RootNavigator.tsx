import * as React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {AuthenticationNavigator} from './AuthenticationStack';

import {AuthorizedNavigator} from './AuthorizedStack';
import {NavigatorContext} from '@context';
import {AppMoudle} from '@di';

export const RootNavigator: React.FC = (props) => {
  const [isAuthoried, setIsAuthorized] = React.useState(false);
  const [tabBarVisible, setTabBarVisible] = React.useState(true);
  const [isCheckingSession, setCheckingSession] = React.useState(true);

  const loadToken = async () => {
    // get token / if has token => isAuthoried = true else  isAuthoried = false
    const token = await AppMoudle.shared.localAuthenticationDataSource.getToken();
    setTimeout(() => {
      if (token) {
        setIsAuthorized(true);
      }
      setCheckingSession(false);
    }, 1000);
  };
  React.useEffect(() => {
    loadToken();
  }, []);

  const renderStack = () => {
    if (isCheckingSession) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="red" size="large" />
        </View>
      );
    }
    if (isAuthoried) return <AuthorizedNavigator />;
    return <AuthenticationNavigator />;
  };
  return (
    <NavigatorContext.Provider
      value={{tabBarVisible, setIsAuthorized, setTabBarVisible}}>
      <NavigationContainer>{renderStack()}</NavigationContainer>
    </NavigatorContext.Provider>
  );
};
