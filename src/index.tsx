import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {createTheme, ThemeProvider} from "@mui/material"
import "styles/global.scss"

const theme = createTheme({
    palette: {
        background: {
            default: "#000",
            paper: "#0D0D0D",
        },
        text: {
            primary: "#fff",
        },
        grey: {
            "600": "#707070",
            "A700": "#0D0D0D",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 700,
            lg: 1200,
            xl: 1640,
        },
    }
})

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
)
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)
