"use client"

import { useTheme } from "next-themes";
import { useIsMounted } from "usehooks-ts";

import { Button, Icon } from "@/components/ui";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();
  return isMounted && (
    <Button
      variant="default"
      size="sm"
      className="p-2 text-gray-900 bg-primary dark:bg-secondary dark:text-slate-100 hover:text-gray-500 dark:hover:text-slate-400"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Icon icon="carbon:sun" className="text-2xl" />
      ) : (
        <Icon icon="carbon:moon" className="text-2xl" />
      )}
    </Button>
  )
}

export default ThemeSwitch