import { ReactNode } from "react";
import { AuthForm, AuthFormType } from "./auth-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AuthPage({type, onDone}: {type: AuthFormType, onDone: Function | null}) {
    
    let header: ReactNode;
    let form: ReactNode;

    switch (type) {
        case AuthFormType.Register:
            header = (
                <CardHeader className="text-center">
                    <CardTitle className="font-extrabold">Tạo tài khoản</CardTitle>
                    <CardDescription>Nếu bạn đã có tài khoản, hãy <Link href="/auth/login"><Button variant="link" className="p-0">đăng nhập</Button></Link> ngay</CardDescription>
                </CardHeader>);
            form = (
                <CardContent>
                    <AuthForm type={AuthFormType.Register} onDone={onDone} />
                </CardContent>);
            break;
        case AuthFormType.Login:
            header = (
                <CardHeader className="text-center">
                    <CardTitle className="font-extrabold">Đăng nhập</CardTitle>
                    <CardDescription>Nếu bạn chưa có tài khoản, hãy <Link href="/auth/register"><Button variant="link" className="p-0">tạo tài khoản</Button></Link> ngay</CardDescription>
                </CardHeader>);
            form = (
                <CardContent>
                    <AuthForm type={AuthFormType.Login} onDone={onDone} />
                </CardContent>);
            break;
        default:
            throw new Error("Invalid page type");
    }

    return (
        
            <Card className="w-full max-w-md">
                {header}
                {form}       
            </Card>
        
    );
}