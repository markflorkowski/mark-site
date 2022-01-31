import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GetServerSideProps } from "next";
import unified from "unified";
import html from "remark-html";
import parse from "remark-parse";

const markdownUrl = `https://raw.githubusercontent.com/markflorkowski/markflorkowski/main/README.md`;

export const getStaticProps: GetServerSideProps = async () => {
  const res = await fetch(markdownUrl);
  const data = await res.text();
  const content = await (
    await unified().use(parse).use(html).process(data)
  ).toString();
  return {
    props: { content },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60,
  };
};

const Home: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div
        className={utilStyles.paper}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </Layout>
  );
};

export default Home;
