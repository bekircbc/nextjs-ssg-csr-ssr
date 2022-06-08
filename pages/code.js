import { DynamicHead } from "../components/DynamicHead";
import { SiteHeader } from "../components/SiteHeader";
import { Nav } from "../components/Nav";

const Code = () => {
  return (
    <>
      <DynamicHead
        title="Code Examplesnnn"
        description="Code examples to help in your development"
        icon="code.ico"
      />
      <SiteHeader />
      <Nav />
      <p>These are the code examples.</p>
    </>
  );
};

export default Code;
