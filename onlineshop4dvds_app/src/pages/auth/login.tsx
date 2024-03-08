import { AuthFormType } from "@/components/auth-form";
import AuthPage from "@/components/auth-page";
import CenteredLayout from "@/components/layouts/centered-layout";

export default function Login() {
    return (
        <CenteredLayout>
            <AuthPage type={AuthFormType.Login} onDone={null}></AuthPage>
        </CenteredLayout>
    );
}