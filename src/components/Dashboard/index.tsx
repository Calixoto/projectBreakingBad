import { CharactersProps } from "../../types/characterType";
import Card from "../Card";
import style from "./styles.module.scss";

interface CardProps {
  items: CharactersProps[];
}

export default function Dashboard({ items }: CardProps) {
  return (
    <section className={style.cardContainer}>
      {items.map((item) => (
        <Card key={item.char_id} item={item} />
      ))}
    </section>
  );
}
