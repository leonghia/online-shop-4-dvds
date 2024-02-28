import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { User } from "../users/user.entity";
import { ProblemDetails } from "../models/problem-details.model";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    public constructor(private authService: AuthService) {
        super({usernameField: "email", passwordField: "password"});
    }

    public async validate(username: string, password: string): Promise<User | null> {
        const user = await this.authService.validate(username, password);

        if (!user) {
            const problemDetails = new ProblemDetails(401, [{name: "credentials", reason: "Invalid email or password."}]);
            throw new UnauthorizedException(problemDetails);
        }

        return user;
    }
}