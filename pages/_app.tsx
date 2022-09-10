import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { wrapper } from "../redux/store";

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

export default wrapper.withRedux(MyApp);
