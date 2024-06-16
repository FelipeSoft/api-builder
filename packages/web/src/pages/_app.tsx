import { AppProps } from "next/app";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Component {...pageProps} />
            <Toaster />
        </ThemeProvider>
    )
}

export default App;