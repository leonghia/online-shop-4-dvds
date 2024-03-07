import { AuthFormType } from "@/components/auth-form";
import Layout from "@/components/layout";
import AuthPage from "@/components/auth-page";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check } from "lucide-react";
import { useState } from "react";

export default function Register() {
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

    if (isRegistrationSuccessful) {
        return (
            <Layout>
                <Alert className="w-full max-w-md">
                    <Check className="h-4 w-4" />
                    <AlertTitle>Đăng kí thành công!</AlertTitle>
                    <AlertDescription>
                        Vui lòng kiểm tra hòm thư email để xác nhận tài khoản của bạn.
                    </AlertDescription>
                </Alert>
            </Layout>
        );
    }
    return <AuthPage type={AuthFormType.Register} onDone={() => setIsRegistrationSuccessful(true)}></AuthPage>;
}