import Head from "next/head";

export const DynamicHead = ({
  title = "Tech Resource Site",
  description = "Tech tools to keep you up on the latest tech",
  icon = "globe.ico",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={`/${icon}`} />
    </Head>
  );
};
