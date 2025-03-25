import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import EventCategoryItem from "@/src/components/event-category-item";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home({categories}) {
  
  const eventCatsDOM = []

  categories.forEach(element => {
    eventCatsDOM.push(<EventCategoryItem category={element}/>)
  });
  
  return (
    <>
      <Head>
        <title>Events app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
          <header>
            <nav>
              <a href="/">Home</a>
              <a href="/events">Events</a>
              <a href="/about-us">About Us</a>
            </nav>
          </header>
        <main className={styles.main}>
          {eventCatsDOM}
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
    </>
  );
}


export async function getStaticProps(){
  const {events_categories} = await import("../data/data.json")

  return {props:{categories:events_categories}}
}