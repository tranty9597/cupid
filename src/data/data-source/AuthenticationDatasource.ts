import {ApiProvider, ServerException, RemoteException} from '@core';
import {SignInResponseData, SignInRequestData, ApiResult} from '../model';

export interface RemoteAuthenticationDatasource {
  /**
   * @method signIn
   *
   * @description Sign in user with phone
   */
  signIn(body: SignInRequestData): Promise<SignInResponseData>;

  /**
   *
   * @param phone: phone number of registation user
   */
  signUp(phone: string): Promise<boolean>;

  signOut(): Promise<boolean>;
}

export class DefaultRemoteAuthenticationDatasource
  implements RemoteAuthenticationDatasource {
  constructor(public provider: ApiProvider) {}

  async signIn(body: SignInRequestData): Promise<SignInResponseData> {
    try {
      const result = await this.provider.post<ApiResult<SignInResponseData>>(
        '/user/auth/sign-in',
        body,
      );
      console.log(result);
      return result.data.data;
    } catch (error) {
      console.log(error);
      if (error.code === 500) {
        throw new ServerException();
      }
      throw new RemoteException();
    }
  }
  async signUp(phone: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  async signOut(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
