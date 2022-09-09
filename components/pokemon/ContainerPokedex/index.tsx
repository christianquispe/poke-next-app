import { ContainerPokedexStyled } from "./styles";

interface ContainerPokedexProps {
  children: React.ReactNode;
}

export const ContainerPokedex: React.FC<ContainerPokedexProps> = ({
  children,
}) => {
  return <ContainerPokedexStyled>{children}</ContainerPokedexStyled>;
};
