import { ReactNode } from "react";
import UserNavbar from "../navbars/user-navbar";
import MyFooter from "../footer";
import Hero from "../hero";
import CurvedContainer from "../curved-container";
import UserLayout from "./user-layout";

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <UserLayout>
            <div className="min-h-screen">
                <div className="bg-hero bg-center bg-no-repeat bg-cover relative">
                    <div>
                        <div className="absolute top-0 h-full w-full bg-shadow z-0"></div>
                        <div className="relative">
                            <div className="flex items-center justify-center">
                                <UserNavbar />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <Hero />
                            </div>
                        </div>
                    </div>
                    <CurvedContainer />
                </div>
                <div>
                    <main className="space-y-6">
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