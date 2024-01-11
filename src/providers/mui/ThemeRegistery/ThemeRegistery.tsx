"use client"

import CssBaseline from "@mui/material/CssBaseline"
import NextAppDirEmotionCacheProvider from "../EmotionCache"
import { prefixer } from "stylis"
import rtlPlugin from "stylis-plugin-rtl"

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
   return (
      <NextAppDirEmotionCacheProvider options={{ key: "muirtl", stylisPlugins: [prefixer, rtlPlugin] }}>
         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
         <CssBaseline />
         {children}
      </NextAppDirEmotionCacheProvider>
   )
}
