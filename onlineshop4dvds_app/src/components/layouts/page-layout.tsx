import { ReactNode } from "react";
import UserNavbar from "../navbars/user-navbar";
import MyFooter from "../footer";
import UserLayout from "./user-layout";

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <UserLayout>
            <div className="min-h-screen flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-center">
                        <UserNavbar />
                    </div>
                    <div>
                        <main className="flex items-center justify-center p-10">
                            {children}
                        </main>
                    </div>
                </div>
                <div className="flex items-center justify-center p-4">
                    <MyFooter />
                </div>
            </div>
        </UserLayout>
    );
}