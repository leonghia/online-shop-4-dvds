import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeSwitcher from "../ThemeSwitcher";

export default function UserLayout({ children }: { children: ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark">
            <main className="text-foreground bg-background p-4">
                <div className="flex justify-end"><ThemeSwitcher /></div>
                {children}
            </main>
        </NextThemesProvider>
    );
}