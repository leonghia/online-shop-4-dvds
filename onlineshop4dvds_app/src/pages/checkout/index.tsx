import CheckoutForm from "@/components/checkout-form";
import PageLayout from "@/components/layouts/page-layout";
import OrderSummary from "@/components/order-summary";
import { Session, getSession } from '@auth0/nextjs-auth0';
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next/types";
import { promises as fs } from 'fs';
import { Country } from "@/utils/country";
import { useState } from "react";
import { PaymentMethodString } from "@/utils/payment";
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


//parameters
const accessKey = 'F8BBA842ECF85';
const secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
const orderInfo = 'OnlineShop4DVDS - Pay with MoMo';
const partnerCode = 'MOMO';
const orderId = partnerCode + new Date().getTime();
const redirectUrl = 'http://localhost:3000/checkout/success?orderId=' + orderId;
const ipnUrl = redirectUrl;
const requestId = orderId;
const extraData = '';
const requestType = "captureWallet";

export default function CheckoutPage({
    user,
    countries,
    googleMapsApiKey
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodString | null>(null);

    const handleChangePaymentMethod = (method: PaymentMethodString) => setPaymentMethod(method);

    const handlePay = async (amount: number) => {
        if (paymentMethod === PaymentMethodString.MoMo) {
            await handleMomoPay(2000);
        }
    };

    const handleMomoPay = async (amount: number) => {
        //before sign HMAC SHA256 with format
        //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
        const rawSignature =
            "accessKey=" +
            accessKey +
            "&amount=" +
            amount +
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
        
        //signature
        const signature = createHmac('sha256', secretKey)
            .update(rawSignature)
            .digest('hex');

        //json object send to MoMo endpoint
        const requestBody = JSON.stringify({
            partnerCode: partnerCode,
            accessKey: accessKey,
            requestId: requestId,
            amount: amount,
            orderId: orderId,
            orderInfo: orderInfo,
            redirectUrl: redirectUrl,
            ipnUrl: ipnUrl,
            extraData: extraData,
            requestType: requestType,
            signature: signature,
            lang: "en",
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