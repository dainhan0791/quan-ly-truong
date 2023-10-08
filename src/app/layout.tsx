"use client";

import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import AuthCheckProvider from "@/components/providers/AuthCheckProvider";

// Create a client

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthCheckProvider>{children}</AuthCheckProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
