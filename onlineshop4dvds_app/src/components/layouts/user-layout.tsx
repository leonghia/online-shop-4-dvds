import { ReactNode } from "react";
import Layout from "./layout";
import { ClientCartProvider } from "@/contexts/client-cart-context";

export default function UserLayout({children}: {children: ReactNode}) {

    return (
        <Layout>
            <ClientCartProvider>
                {children}
            </ClientCartProvider>
        </Layout>
    );
}