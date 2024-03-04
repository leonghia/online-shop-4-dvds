import AuthLayout from "@/components/auth-layout";
import RegisterForm from "@/components/register-form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


export default function Register() {
    return (
        <AuthLayout>
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="font-extrabold">Đăng kí tài khoản</CardTitle>
                    <CardDescription>Nếu bạn đã có tài khoản, hãy <Button variant="link" className="p-0">đăng nhập</Button> ngay</CardDescription>
                </CardHeader>
                <CardContent>
                    <RegisterForm></RegisterForm>
                </CardContent>             
            </Card>
        </AuthLayout>
    );
}