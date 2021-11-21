import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import styles from './home.module.scss';

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const api = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setItems(response.data);
      setIsLoading(true);
    }

    api()
  }, [query])

  return (
    <div className={styles.container}>
      <h1>Breaking Bad <br /> 3º melhor série entre 100 no mundo</h1>
      <h2>Saiba tudo sobre os personagens da terceira <br /> melhor série de TV do século 21</h2>
      <Search getQuery={(q) => setQuery(q)} />
      <p>Personagens</p>
      <Card items={items} isLoading={isLoading} />
    </div>
  )
}
