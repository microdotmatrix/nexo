"use client"

import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

import { Button } from "@/components/ui";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="p-2 text-gray-900 bg-primary dark:bg-secondary dark:text-slate-100 hover:text-gray-500 dark:hover:text-slate-400"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Icon icon="carbon:sun" width="36px" className="w-full h-full" />
      ) : (
        <Icon icon="carbon:moon" width="36px" className="w-full h-full" />
      )}
    </Button>
  )
}

export default ThemeSwitch