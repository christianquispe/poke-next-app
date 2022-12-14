import { useTheme, Text, Spacer, Link } from "@nextui-org/react";

import Image from "next/image";
import NextLink from "next/link";

interface NavbarProps {
  test?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ test }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icone del pokemon"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link css={{ background: "transparent" }}>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link css={{ background: "transparent" }}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
