import { ReactNode } from "react";
import MyNavbar from "../navbar";
import Layout from "./layout";
import MyFooter from "../footer";
import Hero from "../hero";
import CurvedContainer from "../curved-container";

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <Layout>
            <div className="bg-radial">
                <div className="bg-hero bg-center bg-no-repeat bg-cover relative">
                    <div>
                        <div className="absolute top-0 h-full w-full bg-shadow z-0"></div>
                        <div className="relative z-[999]">
                            <div className="flex items-center justify-center">
                                <MyNavbar />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <Hero />
                            </div>
                        </div>
                    </div>
                    <CurvedContainer />
                </div>
                <div>
                    <main className="space-y-10">
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