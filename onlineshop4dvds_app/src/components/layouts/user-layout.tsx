import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function UserLayout({ children }: { children: ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark">
            <main className="text-foreground bg-background">
                {children}
            </main>
        </NextThemesProvider>
    );
}