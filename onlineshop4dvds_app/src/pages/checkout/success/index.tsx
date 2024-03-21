// Extract the orderId from query params, then request to backend server to update the status of that order to be paid
import PageLayout from "@/components/layouts/page-layout";
import { HiCheckCircle } from "react-icons/hi2";

export default function CheckoutSuccess() {
    return (
        <PageLayout>
            <div className="flex items-center justify-center p-4">
                <section className="flex w-full max-w-3xl flex-col lg:flex-row lg:gap-8">
                    <div className="flex justify-center w-full">
                        <HiCheckCircle className="w-20 h-20 text-green-500" />
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}