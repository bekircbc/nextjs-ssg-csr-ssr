import { SiteHeader } from "../../components/SiteHeader";
import { Nav } from "../../components/Nav";
import { NavLink } from "../../components/NavLink";
import { DynamicHead } from "../../components/DynamicHead";

const About = () => {
  return (
    <>
      <DynamicHead />
      <SiteHeader />
      <Nav />
      <p>This is the about page with three links:</p>
      <ul>
        <li>
          <NavLink href="about/background">Background</NavLink>
        </li>
        <li>
          <NavLink href="about/contents">Contents</NavLink>
        </li>
        <li>
          <NavLink href="about/coming-soon">Coming Soon</NavLink>
        </li>
      </ul>
    </>
  );
};

export default About;
