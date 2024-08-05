import { PropsWithChildren } from "react";
import { Metadata } from "next";
import "./globals.css";
import RTQueryClient from "@/components/wrappers/RtqWrapper";
import Layout from "@/components/organism/layouts/RootLayout";

type Props = PropsWithChildren & {};

export const metadata: Metadata = {
  title: "Todo List",
  description: "Todo List",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, display: "block" }}>
        <RTQueryClient>
          <Layout>{children}</Layout>
        </RTQueryClient>
      </body>
    </html>
  );
}
