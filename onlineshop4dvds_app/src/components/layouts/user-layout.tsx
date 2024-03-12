import { ReactNode } from "react";
import MyNavbar from "../navbar";
import Layout from "./layout";
import MyFooter from "../footer";

export default function UserLayout({ children }: { children: ReactNode }) {
    return (
        <Layout>
            <div className="bg-radial">
                <div className="flex items-center justify-center">
                    <MyNavbar />
                </div>
                <div>
                    <main>
                        {children}
                    </main>
                </div>
                <div className="flex items-center justify-center p-4">
                    <MyFooter />
                </div>
            </div>
        </Layout>
    );
}