import style from './styles.module.scss';

interface CardProps {
    isLoading: boolean;
    items: any;
}

export default function Card({ isLoading, items }: CardProps) {
    // items.map((item) => ((item))
    const item = items.map((itema) => itema);
    return (
        <div className={style.cardContainer}>
            {/* {items.map((item) => ((<h1>{item.name}</h1>)))} */}
            <h1>{item.name}</h1>
            {/* <img src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" alt="walter" />
            <h3>Walter White</h3>
            <h4>Nickname</h4>
            <a href="#">Ler mais</a> */}
        </div>
    );
}