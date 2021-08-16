import { theme } from "../styles/Theme";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import "../components/Swiper/Swiper.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
