import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inventory Analyzer AI",
  description: "AI-powered inventory analysis chatbot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-900">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
