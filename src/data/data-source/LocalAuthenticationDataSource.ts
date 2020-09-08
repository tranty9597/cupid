import AsyncStorage from '@react-native-community/async-storage';

export interface LocalAuthenticationDataSource {
  saveToken(token: string): Promise<void>;

  getToken(): Promise<string | null>;
}

export class AsyncStorageAuthenticationDataSource
  implements LocalAuthenticationDataSource {
  private static KEY = 'Authentication_Key';

  saveToken(token: string): Promise<void> {
    return AsyncStorage.setItem(
      AsyncStorageAuthenticationDataSource.KEY,
      token,
    );
  }

  getToken(): Promise<string | null> {
    return AsyncStorage.getItem(AsyncStorageAuthenticationDataSource.KEY);
  }
}
