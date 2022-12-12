import "../styles/globals.css";
import React from "react";
import localFont from "@next/font/local";

const cookie = localFont({
  src: "./fonts/Cookie-Regular.ttf",
  variable: "--font-cookie",
});

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <main className={`${cookie.variable}`}>
        <Component {...pageProps} />
      </main>
    </React.StrictMode>
  );
}

export default MyApp;
