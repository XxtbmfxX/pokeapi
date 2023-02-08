/* eslint-disable @next/next/no-head-element */
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link rel="poke" href="poke.webmanifest" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      </head>
      <body>{children}</body>
    </html>
  );
}
