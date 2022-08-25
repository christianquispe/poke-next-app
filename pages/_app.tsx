import { NextUIProvider } from "@nextui-org/react";

import { AppProps } from "next/app";
import { darkTheme } from "../themes";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
