import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Mail, Lock } from 'lucide-react';
import { Google, Facebook } from "@/components/ui/logo";

export default function Register() {

    return (
        <div className="">
            <Card className="max-w-md mx-auto">
                <CardHeader className="text-center">
                    <CardTitle className="font-extrabold">Đăng kí tài khoản</CardTitle>
                    <CardDescription>Nếu bạn đã có tài khoản, hãy <Button variant="link" className="p-0">đăng nhập</Button> ngay.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                    <div className="grid w-full items-center gap-3">
                        <Label htmlFor="fullName">Họ tên</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"><User className="w-4 h-4 text-gray-200 opacity-70" /></div>
                            <Input type="text" id="fullName" placeholder="Nhập họ tên....." className="ps-10" />
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"><Mail className="w-4 h-4 text-gray-200 opacity-70" /></div>
                            <Input type="email" id="email" placeholder="Nhập email....." className="ps-10" />
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"><Lock className="w-4 h-4 text-gray-200 opacity-70" /></div>
                            <Input type="password" id="password" placeholder="Nhập mật khẩu....." className="ps-10" />
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label htmlFor="password-confirm">Nhập lại mật khẩu</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"><Lock className="w-4 h-4 text-gray-200 opacity-70" /></div>
                            <Input type="password" id="password-confirm" placeholder="Nhập lại mật khẩu....." className="ps-10" />
                        </div>
                    </div>
                    <Button className="w-full">Đăng kí</Button>
                    <div className="py-2 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Hoặc đăng nhập bằng</div>
                    <div className="flex space-between gap-x-4">
                        <Button className="bg-white hover:bg-gray-200 w-1/2">
                            <Google className="mr-2 h-4 w-4" /> Google
                        </Button>
                        <Button className="bg-white hover:bg-gray-200 w-1/2">
                            <Facebook className="mr-2 h-4 w-4" /> Facebook
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}