// Extract the orderId from query params, then request to backend server to update the status of that order to be paid, get the order detail and pass into page props
import PageLayout from "@/components/layouts/page-layout";
import { HiCheckCircle } from "react-icons/hi2";
import { Snippet, Button, Divider, Link } from "@nextui-org/react";
import GradientHeading from "@/components/gradient-heading";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { API_URL } from "@/config";
import { Order } from "@/models/order";

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
    // Update the order status to be paid
    const orderId = context.query["orderId"] as string;
    const res = await fetch(`${API_URL}/order/${orderId}/pay`, { method: "PUT" });
    const order: Order = await res.json();

    return { props: { order } };
}) satisfies GetServerSideProps<{ order: Order }>;

export default function CheckoutSuccessPage({ order }: InferGetServerSidePropsType<typeof getServerSideProps>) {

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
                        <Snippet hideSymbol>{order.orderId}</Snippet>
                    </div>
                    <dl className="flex flex-col gap-4 py-4 mt-10">
                        <div className="flex justify-between">
                            <dt className="text-small font-semibold text-default-500">Total amount</dt>
                            <dd className="text-small font-semibold text-default-700">${(order.subtotal + order.shippingFee - order.discount).toFixed(2)}</dd>
                        </div>
                        <Divider className="my-2" />
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Payment method</dt>
                            <dd className="text-small font-semibold text-default-700">{order.paymentMethod}</dd>
                        </div>
                        <Divider className="my-2" />
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Transaction time</dt>
                            <dd className="text-small font-semibold text-default-700">{new Date(order.createdAt).toLocaleString("vi-VN", { timeStyle: "short", dateStyle: "short" })}</dd>
                        </div>
                        
                    </dl>
                    <div className="flex justify-end mt-6">
                        <Button className="font-medium" color="primary" as={Link} href="/orders">View details</Button>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}