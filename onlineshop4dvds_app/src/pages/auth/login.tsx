import { AuthFormType } from "@/components/auth-form";
import AuthPage from "@/components/auth-page";

export default function Login() {
    return (
        <AuthPage type={AuthFormType.Login}></AuthPage>
    );
}