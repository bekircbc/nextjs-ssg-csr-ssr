import { SiteHeader } from "../../components/SiteHeader";
import { Nav } from "../../components/Nav";
import techItems from "../../data/techItems.json";
import { NavLink } from "../../components/NavLink";
import { DynamicHead } from "../../components/DynamicHead";

const TechItems = () => {
  return (
    <>
      <DynamicHead title="Tech Items" icon="code.ico" />
      <SiteHeader />
      <Nav />
      <code>
        The data on this page is loaded via a static JSON file and can be
        considered{" "}
        <a href="https://stackoverflow.com/questions/68891963/loading-content-from-a-static-json-next-js">
          static site generation (SSG)
        </a>
        .
      </code>
      <p>Currently {techItems.length} tech items:</p>
      <ul>
        {techItems.map((techItem, index) => {
          return (
            <li key={index}>
              <NavLink href={`tech-items/${techItem.id}`}>
                {techItem.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TechItems;
