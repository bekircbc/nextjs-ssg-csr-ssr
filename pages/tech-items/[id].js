/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { SiteHeader } from "../../components/SiteHeader";
import { Nav } from "../../components/Nav";
import { useRouter } from "next/router";
import * as qstr from "../../qtools/qstr";
import axios from "axios";
import styles from "../../styles/TechItem.module.css";
import { DynamicHead } from "../../components/DynamicHead";

const url = "https://edwardtanguay.netlify.app/share/techitems.json";

const TechItems = () => {
  const [techItem, setTechItem] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const id = router.query["id"];
    (async () => {
      const _techItems = (await axios.get(url)).data;
      const _techItem = _techItems.find((m) => String(m.id) === id);
      if (_techItem) {
        _techItem.description = qstr.getQuickDefinitionFromExtras(
          _techItem.extras
        );
        setTechItem(_techItem);
      }
    })();
  }, [router.isReady]);

  return (
    <>
      <DynamicHead />
      <SiteHeader />
      <Nav />
      <code>
        The data on this page is loaded via useEffect/axios (much as with
        create-react-app and Vite) and so can be considered{" "}
        <a href="https://nextjs.org/docs/basic-features/data-fetching/overview">
          client-side rendering (CSR)
        </a>
        .
      </code>
      {Object.entries(techItem).length > 0 && (
        <>
          <h2>{techItem.title}</h2>
          <p className={styles.description}>{techItem.description}</p>
          <p>
            <a
              target="_blank"
              href={`https://onespace.netlify.app/techItems?id=${techItem.id}`}
              rel="noreferrer"
            >
              get more info
            </a>
          </p>
        </>
      )}
    </>
  );
};

export default TechItems;
