import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "Tech Wave",
  description: "This is an ecommerce website built with Next.js and Tailwind CSS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>
        <TRPCReactProvider>
          {children}
          <Analytics />
        </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
