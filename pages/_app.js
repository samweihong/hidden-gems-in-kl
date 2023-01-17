import "../styles/globals.css";
import React from "react";
import localFont from "@next/font/local";

const cookie = localFont({
  src: "./fonts/Cookie-Regular.ttf",
  variable: "--font-cookie",
});

const bugaki = localFont({
  src: [
    {
      path: "./fonts/Bugaki-Regular.ttf",
      style: "normal",
    },
    {
      path: "./fonts/Bugaki-Italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-bugaki",
});

const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat/Montserrat-Regular.ttf",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <main
        className={`${cookie.variable} ${bugaki.variable} ${montserrat.variable}`}
      >
        <Component {...pageProps} />
      </main>
    </React.StrictMode>
  );
}

export default MyApp;
