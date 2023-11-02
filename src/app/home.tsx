import { Navbar, Filter, ListCharacter, Paginate } from "../components";
import "./Page.css";

const Home = () => {
  return (
    <section>
      <Navbar page={0} />
      <Filter />
      <Paginate />
      <ListCharacter />
    </section>
  );
};

export default Home;
