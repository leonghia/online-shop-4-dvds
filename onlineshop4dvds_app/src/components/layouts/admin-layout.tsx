import { ReactNode } from "react";
import Layout from "./layout";
import Sidebar from "../sidebar";

export default function AdminLayout({children}: {children: ReactNode}) {
    return (
        <Layout>
            <div className="flex">
                <Sidebar />
                <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {children}
                </main>
            </div>
        </Layout>
    );
}