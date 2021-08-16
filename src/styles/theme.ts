import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08",
    },
    white: {
      "50": "#F5F8FA",
      "100": "#FFFFFF",
    },
    gray: {
      "50": "#DADADA",
      "100": "#47585B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.50",
        color: "gray.100",
      },
    },
  },
});
