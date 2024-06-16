import User, { UserDocument } from "@modules/user/infrastructure/mongoose/schemas/User";

class AuthenticationService {
    async execute(args: { email: string, password: string }) {
        const { email, password } = args;
        const foundUser = User.findOne({ email });
    }
}

export default AuthenticationService;