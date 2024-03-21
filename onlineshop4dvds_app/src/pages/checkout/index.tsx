import CheckoutForm from "@/components/checkout-form";
import PageLayout from "@/components/layouts/page-layout";
import OrderSummary from "@/components/order-summary";
import { Session, getSession } from '@auth0/nextjs-auth0';
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next/types";
import { promises as fs } from 'fs';
import { Country } from "@/utils/country";
import { useState } from "react";
import { PaymentMethod } from "@/utils/payment";
import { createHmac } from "crypto";

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
    const googleMapsApiKey = process.env.GG_MAPS_API_KEY;
    // Fetch data from external API
    const { user } = await getSession(context.req, context.res) as Session;
    const file = await fs.readFile(process.cwd() + "/countries.json", "utf-8");
    const countries: Country[] = await JSON.parse(file);
    // Pass data to the page via props
    return { props: { user, countries, googleMapsApiKey } }
}) satisfies GetServerSideProps<{ user: UserProfile }>;


const partnerCode = "MOMO";
const accessKey = "F8BBA842ECF85";
const secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
// chuỗi ngẫu nhiên để phân biệt cái request
const requestId = partnerCode + new Date().getTime() + "id";
// mã đặt đơn
const orderId = new Date().getTime() + ":0123456778";
//
const orderInfo = "Thanh toán qua ví MoMo";
// cung cấp họ về một cái pages sau khi thanh toán sẽ trở về trang nớ
const redirectUrl = "https://clever-tartufo-c324cd.netlify.app/pages/home.html";
// Trang thank you
const ipnUrl = "https://clever-tartufo-c324cd.netlify.app/pages/home.html";
// const ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
// số tiền
// const requestType = "payWithATM";
// show cái thông tin thẻ, cái dưới quét mã, cái trên điền form
const requestType = "captureWallet";
const extraData = ""; //pass empty value if your merchant does not have stores

export default function CheckoutPage({
    user,
    countries,
    googleMapsApiKey
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

    const handleChangePaymentMethod = (method: PaymentMethod) => setPaymentMethod(method);

    const handlePay = async (amount: number) => {
        if (paymentMethod === PaymentMethod.MoMo) {
            await handleMomoPay(50000);
        }
    };

    const handleMomoPay = async (amount: number) => {
        //before sign HMAC SHA256 with format
        //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
        const rawSignature =
            "accessKey=" +
            accessKey +
            "&amount=" +
            amount.toString() +
            "&extraData=" +
            extraData +
            "&ipnUrl=" +
            ipnUrl +
            "&orderId=" +
            orderId +
            "&orderInfo=" +
            orderInfo +
            "&partnerCode=" +
            partnerCode +
            "&redirectUrl=" +
            redirectUrl +
            "&requestId=" +
            requestId +
            "&requestType=" +
            requestType;
        //puts raw signature
        //signature
        const signature = createHmac('sha256', secretkey).update(rawSignature).digest('hex');
        const requestBody = JSON.stringify({
            partnerCode,
            partnerName: "Test",
            storeId: "MomoTestStore",
            requestId,
            amount: amount.toString(),
            orderId,
            orderInfo,
            redirectUrl,
            ipnUrl,
            extraData,
            signature
        });

        try {
            const res = await fetch("/api/checkout/momo", {
                method: "POST",
                body: requestBody,
            });
            const data = await res.json();
            console.log(data);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <PageLayout>
            <div className="flex items-center justify-center p-4">
                <section className="flex w-full max-w-5xl flex-col lg:flex-row lg:gap-8">
                    <div className="w-full">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl font-extrabold">Checkout</h1>
                            <CheckoutForm user={user} countries={countries} googleMapsApiKey={googleMapsApiKey!} onChangePaymentMethod={handleChangePaymentMethod} />
                        </div>
                    </div>
                    <OrderSummary onPay={handlePay} />
                </section>
            </div>
        </PageLayout>
    );
}