import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                <Head>
                    <title>Lattice Design</title>
                    <link rel="icon" href="/white-triangle.png" />
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </ChakraProvider>
    );
}
