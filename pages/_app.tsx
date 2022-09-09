import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { store } from "../redux/store";
import { Provider } from "react-redux";

import { darkTheme } from "../themes";

import { globalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Provider store={store}>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
