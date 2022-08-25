import Head from "next/head";

import { Navbar } from "../ui";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  author?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

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
        <meta
          name="description"
          content={`Informacion sobre el pokémon ${title}`}
        />
        <meta name="keywords" content="xxxxx, pokemon, pokemon" />

        <meta property="og:title" content={`Informacipon sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta página es sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
