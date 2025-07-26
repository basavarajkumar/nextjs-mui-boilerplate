import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import * as React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Basavaraj Kumbar",
  description: "NextJs + MUI setup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout---");
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <main className={roboto.variable}>{children}</main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

// import LayoutSkeleton from "containers/LayoutSkeleton";
// import React from "react";
// import CssBaseline from "@mui/material/CssBaseline";

// export default function App({ children }) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       {children}
//     </React.Fragment>
//   );
// }

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }
