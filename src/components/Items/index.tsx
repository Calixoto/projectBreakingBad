import style from './styles.module.scss';

interface CardProps {
    // isLoading: boolean;
    // items: any;
    item: any;
}

export default function Items({ item }: CardProps) {
    console.log(item);
    return (
        <div className={style.cardContent}>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <h4>{item.nickname}</h4>
            <a href="#">Ler mais</a>
        </div>
    );
}