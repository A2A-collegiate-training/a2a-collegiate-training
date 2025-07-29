/* eslint-disable react/prop-types */
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000080",
    },
    secondary: {
      main: "#4f46e5",
    },
  },
  typography: {
    fontFamily: `${geistSans.style.fontFamily}, sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
