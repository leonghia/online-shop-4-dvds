import { AuthFormType } from "@/components/auth-form";
import AuthPage from "@/components/auth-page";

export default function Register() {
    return (
        <AuthPage type={AuthFormType.Register}></AuthPage>
    );
}