import { SiteHeader } from "../../components/SiteHeader";
import { Nav } from "../../components/Nav";
import { DynamicHead } from "../../components/DynamicHead";

const Background = () => {
  return (
    <>
      <DynamicHead description="The background story to this tech site" />
      <SiteHeader />
      <Nav />
      <h2>Background</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
        laborum voluptas voluptate sed dolor saepe veniam, explicabo impedit
        ipsam maxime atque consequatur debitis quae harum, placeat dicta nostrum
        iste.
      </p>
    </>
  );
};

export default Background;
