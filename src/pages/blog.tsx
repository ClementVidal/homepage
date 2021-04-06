import { BlogArticle } from "blog-article";
import { Header, Layout, Experiences, Footer, Profile } from "components";
import { ArticlesList } from "components/blog";

interface StaticProps {
  articles: BlogArticle[];
}

// This function gets called at build time
export async function getStaticProps(): Promise<{ props: StaticProps }> {
  // Call an external API endpoint to get posts
  const res = await fetch('https://dev.to/api/articles?username=canro91');
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
      <ArticlesList articles={articles} />
    </Layout>
  );
}

export default BlogPage;
