import { 
    LogInData,
    SignUpData, 
    UserData,
    API
} from "api";

export class ApiProfile {
    static async postLogIn(logInData: LogInData): Promise<UserData> {
        return fetch(API.login,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(logInData)
            })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                return err;
            })
    }

    static async postSignUp(signUpData: SignUpData): Promise<UserData> {
        return fetch(API.signup,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(signUpData)
            })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                return err;
            })
    }
}