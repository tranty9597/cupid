import React from 'react';

export interface NavigatorContextState {
  tabBarVisible: boolean;
  setIsAuthorized: (value: boolean) => void;
  setTabBarVisible: (visible: boolean) => void;
  username?: string;
}

export const DEFAULT_NAVIGATOR_CONTEXT: NavigatorContextState = {
  tabBarVisible: true,
  setIsAuthorized: () => null,
  setTabBarVisible: () => null,
};

export const NavigatorContext = React.createContext<NavigatorContextState>(
  DEFAULT_NAVIGATOR_CONTEXT,
);
