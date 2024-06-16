import User, { UserDocument } from "@modules/user/infrastructure/mongoose/schemas/User";
import { ConflictError } from "@shared/errors/ConflictError";
import { NotFoundError } from "@shared/errors/NotFoundError";
import { UnauthorizedError } from "@shared/errors/UnauthorizedError";
import bcrypt from "bcrypt";
import { execArgv } from "process";

class AuthenticationService {
    async login(args: { email: string, password: string }) {
        const { email, password } = args;
        const foundUser = await User.findOne({ email });

        if (!foundUser) {
            throw new NotFoundError("insufficient permission")
        };

        const authorized = await bcrypt.compare(password, foundUser.password);

        if (!authorized) {
            throw new UnauthorizedError("wrong credentials")
        };
    }

    async register(args: { email: string, password: string }) {
        const { email, password } = args;
        const foundUser = await User.findOne({ email: email });

        if (foundUser) {
            const emailAlreadyInUse = foundUser.email === email;
            if (emailAlreadyInUse) {
                throw new ConflictError("email already in use")
            }
        }

        try {
            await User.create({ email, password, license: "standard" });
        } catch (error) {
            throw error;
        }
    }
}

export default AuthenticationService;   