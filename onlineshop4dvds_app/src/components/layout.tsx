import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./ui/mode-toggle";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="p-10">
                <div className="flex justify-end">
                    <ModeToggle />
                </div>
                <main>{children}</main>
            </div>
        </ThemeProvider>
    );
}