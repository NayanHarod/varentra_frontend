import Head from "next/head";
import { Header } from "@/components/Header";
import styles from "@/styles/Pages.module.css";

export default function Pages() {
  return (
    <>
      <Head>
        <title>Pages - Neotech Technology Solutions</title>
        <meta name="description" content="Explore our pages and services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Our Pages</h1>
            <p className={styles.description}>
              Explore our various services and solutions
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
