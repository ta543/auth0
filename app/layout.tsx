import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auth0",
  description: "Auth0 interface converted to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
