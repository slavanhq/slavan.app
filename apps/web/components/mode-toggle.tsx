"use client";

import { SunMediumIcon } from "@workspace/ui/components/sun-medium";
import { MoonIcon } from "@workspace/ui/components/moon"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

export const ModeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null;


    const handleToggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return <div onClick={handleToggle}>
        {theme === 'light' ? <MoonIcon size={20}/> : <SunMediumIcon size={20}/>}
    </div>
}