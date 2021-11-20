import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import styles from './home.module.scss';

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const api = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters`
      )

      console.log(response.data);
      setItems(response.data);
      setIsLoading(true);
    }

    api()
  }, [])

  return (
    <div className={styles.container}>
      <h1>Breaking Bad <br /> 3º melhor série entre 100 no mundo</h1>
      <h2>Saiba tudo sobre os personagens da terceira <br /> melhor série de TV do século 21</h2>
      <div>
        <input type="text" placeholder="Nome do Personagem" />
        <button type="submit">Buscar</button>
      </div>
      <p>Personagens</p>
      <Card items={items} isLoading={isLoading} />
    </div>
  )
}
