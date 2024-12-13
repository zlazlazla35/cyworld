import styles from "./page.module.css";
import Head from 'next/head';


export default function Home() {
  return (
    <div>
            <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
        <link rel="stylesheet" href="https://example.com/styles.css" />
        <script src="https://example.com/script.js" />
      </Head>
    </div>
  );
}
