import { UserModel } from "./UserModel";

export interface SignInRequestData {
    phoneNumber: string,
    firebaseToken: {
        key: string,
        code: string
    }
}

export interface ApiResult<T> {
    data: T
    message?: string
}

export interface SignInResponseData {
    token: string,
    userInfo: UserModel
}
export interface SignUpResponseData {
     
}