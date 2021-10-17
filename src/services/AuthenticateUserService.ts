
interface AuthData {
    email: string;
    password: string;
}

class AuthenticateUserService {
    public async execute({email, password}: AuthData){

    }
}

export {AuthenticateUserService}