import { useState } from 'react';
import style from './styles.module.scss';

interface SearchProps {
    getQuery: any;
}

export default function Search({ getQuery }: SearchProps) {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <>
            <form className={style.SearchContainer}>
                <input
                    type="text"
                    className={style.searchInput}
                    placeholder="Nome do Personagem"
                    value={text}
                    onChange={(x) => onChange(x.target.value)}
                />
            </form>
        </>
    );
}