import { SiteHeader } from "../../components/SiteHeader";
import { Nav } from "../../components/Nav";
import { DynamicHead } from "../../components/DynamicHead";

const Contents = () => {
  return (
    <>
      <DynamicHead />
      <SiteHeader />
      <Nav />
      <h2>Contents</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias placeat
        mollitia tempore, similique perferendis vitae harum facilis ut culpa
        quia ipsum ratione quod optio dicta a magni sunt et? Aut!
      </p>
    </>
  );
};

export default Contents;
