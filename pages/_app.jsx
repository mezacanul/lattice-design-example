import {
    ChakraProvider,
    defaultSystem,
} from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { loadHook, Nexus, Singleton } from "lattice-design";

Nexus({
    useTitle: Singleton("Lattice Design"),
});

export default function App({ Component, pageProps }) {
    const [title] = loadHook("useTitle");

    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider
                attribute="class"
                disableTransitionOnChange
            >
                <Head>
                    <title>{title}</title>
                    <link
                        rel="icon"
                        href="/white-triangle.png"
                    />
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </ChakraProvider>
    );
}
