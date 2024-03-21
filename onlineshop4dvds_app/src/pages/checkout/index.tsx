import CheckoutForm from "@/components/checkout-form";
import PageLayout from "@/components/layouts/page-layout";
import OrderSummary from "@/components/order-summary";
import { Button } from "@nextui-org/react";
import { Session, getSession } from '@auth0/nextjs-auth0';
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next/types";
import { promises as fs } from 'fs';
import { Country } from "@/utils/country";

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
    // Fetch data from external API
    const {user} = await getSession(context.req, context.res) as Session;
    const file = await fs.readFile(process.cwd() + "/countries.json", "utf-8");
    const countries: Country[] = await JSON.parse(file);
    // Pass data to the page via props
    return { props: { user, countries } }
  }) satisfies GetServerSideProps<{ user: UserProfile }>

export default function CheckoutPage({
    user,
    countries
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <PageLayout>
            <div className="flex items-center justify-center p-4">
                <section className="flex w-full max-w-5xl flex-col lg:flex-row lg:gap-8">
                    <div className="w-full">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl font-extrabold">Checkout</h1>
                            <CheckoutForm user={user} countries={countries} />
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