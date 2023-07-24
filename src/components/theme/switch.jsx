"use client"

import { useTheme } from "next-themes";

import { Button } from "@/components/ui";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="default"
      size="sm"
      className="p-2 text-gray-900 bg-primary dark:bg-secondary dark:text-slate-100 hover:text-gray-500 dark:hover:text-slate-400"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <span className="i-carbon-sun text-2xl" />
      ) : (
        <span className="i-carbon-moon text-2xl" />
      )}
    </Button>
  )
}

export default ThemeSwitch