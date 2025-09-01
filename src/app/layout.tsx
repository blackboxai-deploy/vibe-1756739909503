import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AWS Data Engineer - Transform Your Data into Insights",
  description: "Expert AWS data engineering solutions that scale. Build robust data pipelines, optimize performance, and unlock the power of your data with cutting-edge AWS technologies.",
  keywords: "AWS, Data Engineer, Data Pipelines, S3, Glue, Redshift, EMR, Kinesis, Lambda, Analytics, Big Data",
  authors: [{ name: "AWS Data Engineer" }],
  openGraph: {
    title: "AWS Data Engineer - Transform Your Data into Insights",
    description: "Expert AWS data engineering solutions that scale. Build robust data pipelines and unlock the power of your data.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased min-h-screen bg-white"
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}