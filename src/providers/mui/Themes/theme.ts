import { createTheme } from "@mui/material/styles"
import { defaultTheme } from "./default"

export const theme = createTheme({
   ...defaultTheme,
   components: {
      MuiCssBaseline: {},
      MuiSelect: {
         styleOverrides: {
            outlined: {
               padding: "11.5px 14px",
            },
         },
      },
      MuiCheckbox: {
         styleOverrides: {
            root: {
               padding: 0,
               borderRadius: "4px",
            },
         },
      },
   },
})
