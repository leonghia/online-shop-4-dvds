"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProblemDetails } from "@/models/problem-details";
import { useRouter } from "next/router";
import { API_URL, serverErrorMessage } from "@/config";
import AlertDestructive from "../alert-destructive";
import { saveToken } from "@/utils/token";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "@/models/jwt-payload";

const passwordErrorMessage = "Mật khẩu phải chứa từ 6 - 64 kí tự";
const emailErrorMessage = "Vui lòng nhập đúng định dạng email";

const formSchema = z.object({
    email: z.string().email({ message: emailErrorMessage }),
    password: z.string().min(6, { message: passwordErrorMessage }).max(64, { message: passwordErrorMessage }),
    remember: z.boolean().default(false).optional(),
});

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMesage] = useState<string[] | null>(null);
    const router = useRouter();

    // 1. Define your form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    // 2. Define a submit handler
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        setErrorMesage(null);

        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email: values.email, password: values.password}),
            });

            if (!res.ok) {
                const problemDetails = await res.json() as ProblemDetails;
                setErrorMesage(problemDetails.message);
            } else {
                const data = await res.json();
                const accessToken = data.accessToken;
                saveToken(accessToken, values.remember || false);
                const payload = jwtDecode(accessToken) as JwtPayload;
                if (payload.roles.includes("Admin")) router.push("/dashboard");
                else router.push("/");
            }
        } catch (err) {
            setErrorMesage([serverErrorMessage]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            {errorMessage && <AlertDestructive title="Lỗi" description={errorMessage}></AlertDestructive>}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <div className="relative">
                                <div className="absolute opacity-40 inset-y-0 start-0 flex items-center pointer-events-none ps-3 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <FormControl>
                                    <Input className="pe-0 ps-10" placeholder="nguyenvana@gmail.com" {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <div className="relative">
                                <div className="absolute opacity-40 inset-y-0 start-0 flex items-center pointer-events-none ps-3 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <LockKeyhole className="w-4 h-4" />
                                </div>
                                <FormControl>
                                    <Input className="pe-0 ps-10" type="password" placeholder="*******" {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-between">
                    <FormField
                        control={form.control}
                        name="remember"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-start space-x-3 space-y-0 pl-1">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Remember me
                                        </FormLabel>
                                    </div>
                                </div>
                                
                            </FormItem>
                        )}
                    />

                    <div className="flex items-start">
                        <Link href="/auth/forget-password">
                            <Button variant="link" className="p-0 w-auto h-auto">Forgot password?</Button>
                        </Link>
                    </div>
                </div>

                

                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Login
                </Button>
            </form>
        </Form>
    );
}