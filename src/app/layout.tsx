import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://quantitaivemethodsreportr1.vercel.app";

export const metadata: Metadata = {
  title: "Quantitative Methods - 3R1",
  description:
    "Price Determinants in Mobile Computing: A Multiple Regression Analysis of Laptop Specifications & Pricing Elasticity. IT3R1 · IT324.",
  openGraph: {
    title: "Quantitative Methods - 3R1",
    description:
      "Price Determinants in Mobile Computing: A Multiple Regression Analysis of Laptop Specifications & Pricing Elasticity.",
    url: siteUrl,
    siteName: "QM Presentation · IT3R1",
    images: [
      {
        url: `${siteUrl}/assets/main.png`,
        width: 1200,
        height: 630,
        alt: "Quantitative Methods Research Presentation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantitative Methods - 3R1",
    description:
      "Price Determinants in Mobile Computing: A Multiple Regression Analysis of Laptop Specifications & Pricing Elasticity.",
    images: [`${siteUrl}/assets/main.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
