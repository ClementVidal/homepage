import { BlogArticle } from "blog-article";
import { Header, Layout, Footer } from "components";
import { PostsList } from "./posts";

interface StaticProps {
  articles: BlogArticle[];
}

// This function gets called at build time
export async function getStaticProps(): Promise<{ props: StaticProps }> {
  // Call an external API endpoint to get posts
  const res = await fetch('https://dev.to/api/articles?username=clementvidal');
  const articles = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      articles,
    },
  }
}

function BlogPage({ articles }: { articles?: BlogArticle[] }) {
  return (
    <Layout>
      <Header >
      </Header>
      <PostsList articles={articles} />
      <Footer />
    </Layout>
  );
}

export default BlogPage;
