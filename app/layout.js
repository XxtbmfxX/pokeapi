/* eslint-disable @next/next/no-head-element */
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
