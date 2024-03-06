"use client"

import { useState } from "react";
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
import { User, Mail, LockKeyhole } from 'lucide-react';
import { ProblemDetails } from "@/models/problem-details";
import { API_URL, serverErrorMessage } from "@/config";
import AlertDestructive from "./alert-destructive";
import { Loader2 } from "lucide-react";

const fullNameErrorMessage = "Họ tên phải chứa từ 3 - 64 kí tự";
const passwordErrorMessage = "Mật khẩu phải chứa từ 6 - 64 kí tự";
const emailErrorMessage = "Vui lòng nhập đúng định dạng email"

const formSchema = z.object({
    fullName: z.string().min(3, { message: fullNameErrorMessage }).max(64, { message: fullNameErrorMessage }),
    email: z.string().email({ message: emailErrorMessage }),
    password: z.string().min(6, { message: passwordErrorMessage }).max(64, { message: passwordErrorMessage })
});

export default function RegisterForm({onDone}: {onDone: Function}) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[] | null>(null);

    // 1. Define your form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        setErrors(null);

        let problemDetails;

        try {
            const res = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

        
            if (!res.ok) {
                problemDetails = await res.json() as ProblemDetails;
                setErrors(problemDetails?.message.map(m => `• ${m}`) || [`• ${serverErrorMessage}`]);
                return;
            }

            onDone();
            
        } catch (err: any) {
            setErrors(problemDetails?.message.map(m => `• ${m}`) || [`• ${serverErrorMessage}`]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            {errors && <AlertDestructive title="Error" description={errors} /> }
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Họ tên</FormLabel>
                            <div className="relative">
                                <div className="absolute opacity-40 inset-y-0 start-0 flex items-center pointer-events-none ps-3 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <User className="w-4 h-4" />
                                </div>
                                <FormControl>
                                    <Input className="pe-0 ps-10" placeholder="Nguyễn Văn A" {...field} />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                            <FormLabel>Mật khẩu</FormLabel>
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
                <Button disabled={isLoading} type="submit" className="w-full">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Đăng kí
                </Button>
            </form>
        </Form>
    );
}

