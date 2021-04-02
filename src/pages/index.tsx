import { Header, Layout, Experiences, Footer, Profile } from "components";

function HomePage() {
  return (
    <Layout>
      <Header >
        <Profile />
      </Header>
      <Experiences />
      <Footer />
    </Layout>
  );
}

export default HomePage;
