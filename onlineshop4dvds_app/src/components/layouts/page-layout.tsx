import { ReactNode } from "react";
import MyNavbar from "../navbar";
import Layout from "./layout";
import MyFooter from "../footer";
import UserLayout from "./user-layout";

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <UserLayout>
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
        </UserLayout>
    );
}