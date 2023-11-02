import { Navbar, Filter, ListCharacter, Paginate } from "../../components";
import "./Home.css";

const Page = () => {
  return (
    <section>
      <Navbar page={0} />
      <Filter />
      <Paginate />
      <ListCharacter />
    </section>
  );
};

export default Page;
