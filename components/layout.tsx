import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Mark R. Florkowski";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Mark Florkowski's personal website built on Next.js."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
