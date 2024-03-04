import { ReactNode } from "react";
import RegisterForm from "./register-form";
import Divider from "./ui/divider";
import { Button } from "./ui/button";
import { Facebook, Google } from "./ui/icon";
import LoginForm from "./login-form";

export enum AuthFormType {
    Login,
    Register
}

export function AuthForm({ type }: { type: AuthFormType }) {
    let form: ReactNode;
    switch (type) {
        case AuthFormType.Login:
            form = <LoginForm></LoginForm>;
            break;
        case AuthFormType.Register:
            form = <RegisterForm></RegisterForm>;
            break;
        default:
            throw new Error("Invalid form type");
    }

    return (
        <div className="space-y-4">
            {form}
            <Divider label="Hoặc đăng nhập bằng" />
            <div className="flex space-between gap-x-2">
                <Button className="basis-1/2" variant="secondary"><Google /> Google</Button>
                <Button className="basis-1/2" variant="secondary"><Facebook /> Facebook</Button>
            </div>
        </div>
    );
}