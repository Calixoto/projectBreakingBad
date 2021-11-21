import Items from '../Items';
import style from './styles.module.scss';

interface CardProps {
    isLoading: boolean;
    items: any;
}

export default function Card({ isLoading, items }: CardProps) {
    return (
        <section className={style.cardContainer}>
            {items.map((item) => ((
                <Items key={item.char_id} item={item} />
            )))}
            {/* <img src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" alt="walter" />
            <h3>Walter White</h3>
            <h4>Nickname</h4>
            <a href="#">Ler mais</a> */}
        </section>
    );
}