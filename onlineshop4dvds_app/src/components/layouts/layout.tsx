import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {

    return (
        <NextThemesProvider attribute="class">
            <div className={`text-foreground bg-radial ${inter.className}`}>
                {children}
            </div>
        </NextThemesProvider>
    );
}