import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Search from "../components/Search";
import { api } from "../services/api";
import { CharactersProps } from "../types/characterType";
import styles from "./home.module.scss";

interface Props {
  characters: CharactersProps[];
}

export default function Home({ characters }: Props) {
  const [items, setItems] = useState<CharactersProps[]>([]);
  const [query, setQuery] = useState("");

  console.log(characters);

  useEffect(() => {
    setItems(characters);
  }, [characters]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>
          Breaking Bad <br /> 3º melhor série entre 100 no mundo
        </h1>
        <h2>
          Saiba tudo sobre os personagens da terceira <br /> melhor série de TV
          do século 21
        </h2>
        <Search getQuery={(q) => setQuery(q)} />
        <p>Personagens</p>
        <Dashboard items={items} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const characters = await api
    .get("characters")
    .then((response) => response.data);
  return {
    props: {
      characters,
    },
    revalidate: 60 * 30 * 24,
  };
};
