import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Broodl",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Broodl</h1>
      <Logout />
    </header>
  )

  const footer = (
    <footer className="p-5 sm:p-8 grid place-items-center">
      <Link href={'https://github.com/AlaaAlzahrani'} target="_blank" className="">
      <p className={'text-[#8f5ecc] duration-200 hover:text-white hover:bg-[#8f5ecc]  ' + fugaz.className}>Created with <span className="text-sm[1px]">💛</span> </p>
      </Link>
      <Link href={'https://www.youtube.com/watch?v=lkjrUW8fI40'} target="_blank" className="">
      <p className={'text-sm/[10px] text-indigo-200 duration-200 hover:text-white hover:bg-[#8f5ecc]  ' + fugaz.className}>Credits to Smoljames</p>
      </Link>
    </footer>
  )

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800  ' + opensans.className}>
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}