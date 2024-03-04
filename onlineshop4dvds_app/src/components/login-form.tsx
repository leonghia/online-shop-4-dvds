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

const passwordErrorMessage = "Mật khẩu phải chứa từ 6 - 64 kí tự";
const emailErrorMessage = "Vui lòng nhập đúng định dạng email";

const formSchema = z.object({
    email: z.string().email({message: emailErrorMessage}),
    password: z.string().min(6, { message: passwordErrorMessage }).max(64, { message: passwordErrorMessage })
});

export default function LoginForm() {
    // 1. Define your form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
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
                            <FormControl>
                                <Input placeholder="nguyenvana@gmail.com" {...field} />
                            </FormControl>

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
                            <FormControl>
                                <Input placeholder="*******" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Đăng nhập</Button>
            </form>
        </Form>
    );
}