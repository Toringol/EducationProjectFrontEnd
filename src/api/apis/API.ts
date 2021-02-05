import urlJoin from 'url-join';

export class API {
    private static readonly baseAuthService = 'http://142.93.163.117:8080';

    static readonly login = urlJoin(API.baseAuthService, 'login/');
    static readonly signup = urlJoin(API.baseAuthService, 'signup/');
}