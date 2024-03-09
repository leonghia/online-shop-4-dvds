import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark">
            <main className={`text-foreground bg-background p-4 ${inter.className}`}>
                {children}
            </main>
        </NextThemesProvider>
    );
}