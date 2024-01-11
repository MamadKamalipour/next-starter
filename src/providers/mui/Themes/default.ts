import { createTheme } from "@mui/material/styles"
import localFont from "next/font/local"
import { paletteTheme } from "./palette"

// export const DanaFont = localFont({
//   src: [
//     {
//       path: "../../../../public/static/fonts/Dana/woff2/DanaFaNum-Thin.woff2",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "../../../../public/static/fonts/Dana/woff2/DanaFaNum-UltraLight.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "../../../../public/static/fonts/Dana/woff2/DanaFaNum-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../../../../public/static/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../../../public/static/fonts/Dana/woff2/DanaFaNum-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../../../public/static/fonts/Dana/woff2/DanaFaNum-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../../../../public/static/fonts/Dana/woff2/DanaFaNum-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../../../../public/static/fonts/Dana/woff2/DanaFaNum-ExtraBold.woff2",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "../../../../public/static/fonts/Dana/woff2/DanaFaNum-Black.woff2",
//       weight: "900",
//       style: "normal",
//     },
//   ],
// });

export const defaultTheme = createTheme({
   direction: "rtl",
   palette: paletteTheme,
   typography: {
      //  fontFamily: [DanaFont.style.fontFamily].join(","),

      body1: {
         fontWeight: "normal",
         fontStyle: "normal",
         fontSize: 14,
         lineHeight: "24px",
         letterSpacing: "0.15px",
      },
      button: {
         paddingLeft: 24,
         paddingRight: 24,
         fontWeight: 500,
         fontStyle: "normal",
         fontSize: 20,
         color: "#175A6B",
      },
      table: {
         fontWeight: "normal",
         fontStyle: "normal",
         fontSize: 12,
         lineHeight: "16px",
         letterSpacing: "0.1px",
      },
      table2: {
         fontWeight: 900,
         fontStyle: "normal",
         fontSize: 12,
         lineHeight: "16px",
         letterSpacing: "0.1px",
      },
      overLineCaption: {
         fontWeight: "normal",
         fontStyle: "normal",
         fontSize: 11,
         lineHeight: "16px",
         letterSpacing: "0.1px",
      },
      link: {
         fontWeight: "normal",
         fontStyle: "italic",
         fontSize: 12,
         lineHeight: "20px",
         letterSpacing: "0.15px",
      },
      h1: {
         fontWeight: 300,
         fontStyle: "normal",
         fontSize: 59,
         lineHeight: "80px",
         letterSpacing: "-0.5px",
      },
      h2: {
         fontWeight: "normal",
         fontStyle: "normal",
         fontSize: 40,
         lineHeight: "64px",
         letterSpacing: "0px",
      },
      h3: {
         fontWeight: "normal",
         fontStyle: "normal",
         fontSize: 30,
         lineHeight: "48px",
         letterSpacing: "0.25px",
      },
      h4: {
         fontWeight: "normal",
         fontStyle: "normal",
         fontSize: 24,
         lineHeight: "40px",
         letterSpacing: "0px",
      },
      h5: {
         fontWeight: 500,
         fontStyle: "normal",
         fontSize: 18,
         lineHeight: "28px",
         letterSpacing: "0.15px",
      },

      subtitle1: {
         fontWeight: "normal",
         fontStyle: "normal",
         fontSize: 16,
         lineHeight: "24px",
         letterSpacing: "0.15px",
      },
      subtitle2: {
         fontWeight: 500,
         fontStyle: "normal",
         fontSize: 14,
         lineHeight: "24px",
         letterSpacing: "0.1px",
      },
   },
   sizes: {
      sideMenu: {
         width: 70,
         itemHeight: 60,
         logoHeight: 60,
         paddingTop: 20,
         marginBottom: 20,
      },
      hex: 80,
      hex_node: 60,
      hex_event: 60,
      hex_service: 60,
      hex_structure: 30,
      header: {
         iconTray: 200,
         height: 60,
      },
   },
})
