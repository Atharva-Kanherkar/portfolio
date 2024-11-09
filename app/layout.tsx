import type { Metadata } from "next";
 
import "./globals.css";
 

 
export const metadata: Metadata = {
  title: "Atharva's portfolio",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative h-screen">

        {children}
      </body>
    </html>
  );
}
