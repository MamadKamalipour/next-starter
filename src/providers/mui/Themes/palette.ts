import { PaletteOptions } from "@mui/material/styles"
declare module "@mui/material/styles" {
   interface Theme {
      sizes: Sizes
   }
   interface ThemeOptions {
      sizes: Sizes
   }
   interface Sizes {
      sideMenu: {
         width: number
         itemHeight: number
         logoHeight: number
         paddingTop: number
         marginBottom: number
      }
      hex: number
      hex_node: number
      hex_event: number
      hex_service: number
      hex_structure: number
      header: {
         iconTray: number
         height: number
      }
   }
   interface Palette {
      greyscale: Palette["primary"]
      pending: Palette["primary"]
      purple: PaletteOptions["primary"]
      typography: TypographyPalleteColorOptions
   }
   interface PaletteOptions {
      pending: PaletteOptions["primary"]
      purple: PaletteOptions["primary"]
      typography: TypographyPalleteColorOptions
   }

   interface TypographyPalleteColorOptions {
      title: string
      delete: string
      secondary: string
      success: string
      info: string
   }

   interface TypographyPalleteColorOptions {
      title: string
      delete: string
   }
   interface TypographyVariants {
      table: React.CSSProperties
      table2: React.CSSProperties
      overLineCaption: React.CSSProperties
      link: React.CSSProperties
   }

   // allow configuration using `createTheme`
   interface TypographyVariantsOptions {
      table: React.CSSProperties
      table2: React.CSSProperties
      overLineCaption: React.CSSProperties
      link: React.CSSProperties
   }
}

export const paletteTheme: PaletteOptions = {
   info: {
      main: "#0076E2",
      "100": "#E9F4FF",
   },
   background: { paper: "#fff", default: "#f0f0f0" },
   common: {
      black: "#323232",
      white: "#FFFFFF",
   },
   error: { main: "#f44336", "100": "#EC1A1A1A" },
   pending: { main: "#e7cc0e", dark: "#B09000" },
   primary: {
      main: "#66247d",
      "100": "#855097",
      "500": "#66247d",
      "700": "#521d64",
   },
   secondary: {
      main: "#175a6b",
      "100": "#457b88",
      "500": "#175a6b",
      "700": "#103e4a",
   },
   success: {
      main: "#0A9C55",
      "100": "#F3FDF8",
   },
   purple: {
      main: "#66247D",
   },
   typography: {
      title: "#175A6B",
      delete: "#EF0E29",
      secondary: "#5C5C5C",
      success: "#0A9C55",
      info: "#0076E2",
   },
}
