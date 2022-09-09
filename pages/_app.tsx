import { NextUIProvider } from "@nextui-org/react";

import { AppProps } from "next/app";
import { darkTheme } from "../themes";

import { globalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
