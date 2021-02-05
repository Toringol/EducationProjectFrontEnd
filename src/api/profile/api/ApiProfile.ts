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
                return response.json();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static postSignUp(signUpData: SignUpData): Promise<Response | void> {
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
                console.log(err);
            })
    }
}