import { NavLink } from "./NavLink";

export const Nav = () => {
  return (
    <nav>
      <span>
        <NavLink exact href="/">
          Welcome
        </NavLink>
      </span>
      <span className="separator">|</span>
      <span>
        <NavLink href="/code">Code</NavLink>
      </span>
      <span className="separator">|</span>
      <span>
        <NavLink href="/tech-items">Tech Items</NavLink>
      </span>
      <span className="separator">|</span>
      <span>
        <NavLink href="/members">Members</NavLink>
      </span>
      <span className="separator">|</span>
      <span>
        <NavLink href="/about">About</NavLink>
      </span>
    </nav>
  );
};
