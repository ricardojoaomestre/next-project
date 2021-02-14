import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Welcome to my <code>next-project</code> running on{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </h1>
      </main>
    </div>
  );
}
