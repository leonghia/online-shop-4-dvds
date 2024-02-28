export class JwtPayload {
    email: string;
    sub: number;

    constructor(email: string, sub: number) {
        this.email = email;
        this.sub = sub;
    }
}