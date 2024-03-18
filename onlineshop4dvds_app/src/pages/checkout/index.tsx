import CheckoutForm from "@/components/checkout-form";
import PageLayout from "@/components/layouts/page-layout";
import OrderSummary from "@/components/order-summary";
import { Button } from "@nextui-org/react";

export default function CheckoutPage() {

    return (
        <PageLayout>
            <div className="flex items-center justify-center p-4">
                <section className="flex w-full max-w-5xl flex-col lg:flex-row lg:gap-8">
                    <div className="w-full">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl font-extrabold">Checkout</h1>
                            <CheckoutForm />
                        </div>

                    </div>
                    <div className="w-full rounded-medium bg-content2 px-2 py-4 dark:bg-content1 md:px-6 md:py-8 lg:w-[340px] lg:flex-none">
                        <OrderSummary />
                        <div className="mt-4">
                            <Button color="primary" className="font-medium" fullWidth>Pay now</Button>
                        </div>
                    </div>
                </section>

            </div>
        </PageLayout>
    );
}