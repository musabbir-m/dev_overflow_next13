import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Next JS 13 with Clerk",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
