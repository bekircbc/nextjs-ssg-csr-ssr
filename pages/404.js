/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "../components/NavLink";
import styles from "../styles/Page404.module.css";

const FourOhFour = () => {
  return (
    <>
      <div className={styles.error}>404 Error</div>
      <p>
        Sorry, this page doesn't exist. Go back to{" "}
        <NavLink href="/">welcome page</NavLink>.
      </p>
    </>
  );
};

export default FourOhFour;
