import { UserModel } from "./UserModel";

export interface SignInRequestData {
    phoneNumber: string,
    firebaseToken: {
        key: string,
        code: string
    }
}

export interface SignInResponseData {
    token: string,
    userInfo: UserModel
}