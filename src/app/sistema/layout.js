import { Inter } from "next/font/google";
import Menu from "@/component/MenuLateral";
import "../globals.css";
// import { Metadata } from 'next'
//
// export const metadata = {
//   title: 'Dashboard'
// }

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
      <Menu />

        {children}
      </body>
    </html>
  );
}
