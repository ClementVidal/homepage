import { Header, Layout, Footer, Profile } from "components";
import { ExperiencesList } from "../components/experiences";

function HomePage() {
  return (
    <Layout>
      <Header >
        <Profile />
      </Header>
      <ExperiencesList />
      <Footer />
    </Layout>
  );
}

export default HomePage;
