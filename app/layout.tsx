import ClientOnly from "@/components/ClientOnly";
import "./globals.css";
import { Inter } from "next/font/google";
import Advertisement from "@/components/Advertisement";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PreviewModal from "@/components/modal/PreviewModal";
import ToastProvider from "@/components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommer App",
  description: "Ecommer 4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToastProvider />
          <PreviewModal />
          <Advertisement />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
