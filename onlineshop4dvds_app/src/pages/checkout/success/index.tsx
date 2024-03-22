// Extract the orderId from query params, then request to backend server to update the status of that order to be paid
import PageLayout from "@/components/layouts/page-layout";
import { HiCheckCircle } from "react-icons/hi2";
import { Snippet, Button } from "@nextui-org/react";
import GradientHeading from "@/components/gradient-heading";

export default function CheckoutSuccess() {
    return (
        <PageLayout>
            <div className="flex items-center justify-center p-10">
                <section className="w-full max-w-lg">
                    <div className="flex justify-center w-full mb-10">
                        <span className="relative flex w-16 h-16">
                            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <HiCheckCircle className="w-16 h-16 text-green-500 relative" />
                        </span>
                    </div>
                    {/* <h2 className="text-3xl font-extrabold tracking-tight text-green-400 text-center">Order Payment Successful</h2> */}
                    <GradientHeading className="from-[#6FEE8D] to-[#17c964] !text-3xl font-extrabold text-center">Order Payment Successful</GradientHeading>
                    <p className="text-medium text-default-500 text-center mt-4">Your payment has been processed!<br />Details of transaction are included below</p>
                    <div className="mt-8 flex justify-center w-full items-center gap-x-4">
                        <p className="text-primary font-semibold text-small">Order ID:</p>
                        <Snippet hideSymbol>MOMO434235525465</Snippet>
                    </div>
                    <dl className="flex flex-col gap-4 py-4 mt-10">
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Payment method</dt>
                            <dd className="text-small font-semibold text-default-700">MoMo</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Transaction time</dt>
                            <dd className="text-small font-semibold text-default-700">08:17 22/3/2024</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Subtotal</dt>
                            <dd className="text-small font-semibold text-default-700">$159.96</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Shipping fee</dt>
                            <dd className="text-small font-semibold text-default-700">$0.00</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Discount</dt>
                            <dd className="text-small font-semibold text-default-700"> N/A</dd>
                        </div>
                        <hr
                            className="shrink-0 bg-divider border-none w-full h-divider"
                            role="separator"
                        />
                        <div className="flex justify-between">
                            <dt className="text-small font-semibold text-default-500">Total</dt>
                            <dd className="text-small font-semibold text-pink-500">$172.96</dd>
                        </div>
                    </dl>
                    <div className="flex justify-end mt-6">
                        <Button className="font-medium" color="primary">View details</Button>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}