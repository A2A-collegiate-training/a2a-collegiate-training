import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import SportsMenu from "@/components/SportsMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
     <SportsMenu />
     <Head>
        <title>A2A Sports Apparel</title>
        <meta name="description" content="Shop premium gear for football, hockey, lacrosse & more – tailored for men and women." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  

      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <h1 className="text-4xl font-semibold mb-4">Welcome to A2A</h1>
         

    
        </main>
      </div>
    </>
  );
}
