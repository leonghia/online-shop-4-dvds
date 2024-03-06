import { API_URL } from "@/config";
import { useSearchParams } from "next/navigation";
import ConfirmEmailPayload from "../../models/confirm-email-payload";
import AuthLayout from "@/components/auth-layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Check } from "lucide-react";

export default function ConfirmEmail({ status }: { status: boolean }) {
    // Render data
    if (status) {
        return (
            <AuthLayout>
                <Alert className="w-full max-w-md">
                    <Check className="h-4 w-4" />
                    <AlertTitle>Xác nhận thành công!</AlertTitle>
                    <AlertDescription>
                        Bạn đã xác nhận email thành công. Bây giờ bạn có thể bắt đầu đăng nhập vào OnlineShop4DVDS.
                    </AlertDescription>
                </Alert>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout>
            <Alert variant="destructive" className="w-full max-w-md">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Lỗi</AlertTitle>
                <AlertDescription>
                    Rất tiếc. Link xác nhận này đã không còn khả dụng.
                </AlertDescription>
            </Alert>
        </AuthLayout>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    let status: boolean;

    // Fetch data from external API
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const token = searchParams.get("token");

    if (!email || !token) {
        return { props: { status: false } };
    }

    const confirmEmailPayload = new ConfirmEmailPayload(email, token);

    try {
        const res = await fetch(`${API_URL}/auth/confirm-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(confirmEmailPayload)
        });

        if (!res.ok) {
            status = false;
        }

        status = true;

    } catch (err) {
        status = false;
    }

    return { props: { status } };
}