"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";
import { LockKeyhole, Mail } from "lucide-react";

const passwordErrorMessage = "Mật khẩu phải chứa từ 6 - 64 kí tự";
const emailErrorMessage = "Vui lòng nhập đúng định dạng email";

const formSchema = z.object({
    email: z.string().email({ message: emailErrorMessage }),
    password: z.string().min(6, { message: passwordErrorMessage }).max(64, { message: passwordErrorMessage }),
    remember: z.boolean().default(false).optional(),
});

export default function LoginForm() {
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
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
        <Form {...form}>
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

                <FormField
                    control={form.control}
                    name="remember"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 pl-1">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Lưu thông tin
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">Đăng nhập</Button>
            </form>
        </Form>
    );
}