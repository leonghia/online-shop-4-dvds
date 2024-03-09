import { AuthFormType } from "@/components/auth/auth-form";
import AuthPage from "@/components/auth/auth-page";
import CenteredLayout from "@/components/layouts/centered-layout";

export default function Login() {
    return (
        <CenteredLayout>
            <AuthPage type={AuthFormType.Login} onDone={null}></AuthPage>
        </CenteredLayout>
    );
}