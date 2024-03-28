import { ReactNode } from "react";
import Layout from "./layout";
import Sidebar from "../dashboard/sidebar";
import AdminNavbar from "../navbars/admin-navbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <Layout>
            <div className="bg-radial min-h-screen">
                <div className="flex relative">
                    <Sidebar className="sticky top-0"  />
                    <div className="flex-1">
                        <AdminNavbar />
                        <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden p-10">
                            {children}
                        </main>
                    </div>
                </div>
            </div>

        </Layout>
    );
}