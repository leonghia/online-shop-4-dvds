import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="space-x-2">
      <Button onClick={() => setTheme('light')} isIconOnly color="default" variant="light" aria-label="Light mode">
        <Sun />
      </Button>
      <Button onClick={() => setTheme('dark')} isIconOnly color="default" variant="light" aria-label="Dark mode">
        <Moon />
      </Button>
    </div>
  )
};