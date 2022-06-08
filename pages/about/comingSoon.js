import { SiteHeader } from "../../components/SiteHeader";
import { Nav } from "../../components/Nav";
import { DynamicHead } from "../../components/DynamicHead";

const ComingSoon = () => {
  return (
    <>
      <DynamicHead />
      <SiteHeader />
      <Nav />
      <h2>Coming Soon</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, iste aut
        tempore mollitia facilis tempora commodi impedit. In facilis labore
        doloribus optio exercitationem perspiciatis ut sequi ipsa, eligendi
        perferendis voluptates?
      </p>
    </>
  );
};

export default ComingSoon;
