import Items from '../Items';
import style from './styles.module.scss';

interface CardProps {
    items: any;
}

export default function Card({ items }: CardProps) {
    return (
        <section className={style.cardContainer}>
            {items.map((item) => ((
                <Items key={item.char_id} item={item} />
            )))}
        </section>
    );
}