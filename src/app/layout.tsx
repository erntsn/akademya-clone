import "./globals.css";
import { Montserrat, PT_Sans } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ClientOnly from "@/components/ClientOnly";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akademya Nevşehir Diş Kliniği",
  description: "Akademya Nevşehir Diş Polikliniği| İmplant Diş | Zirkonyum Diş |Diş Kaplama | Diş Beyazlatma | Gülüş Tasarımı | Kanal Tedavisi |Diş Temizleme",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${ptSans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          <ClientOnly>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ClientOnly>
        </LanguageProvider>
      </body>
    </html>
  );
}
