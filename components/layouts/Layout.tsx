import Head from "next/head";

import { Navbar } from "../ui";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  author?: string;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Pokemos App",
  author = "Christian Quispe",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content="Informacion sobre el pokemos xxxxx" />
        <meta name="keywords" content="xxxxx, pokemon, pokemon" />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
