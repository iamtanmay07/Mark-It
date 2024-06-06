import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Mark-It",
  description: "Mark It, Note It, Remember It.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          GeistSans.className,
        )}
      >
        <ConvexClientProvider>

          {children}

        <Toaster/>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
