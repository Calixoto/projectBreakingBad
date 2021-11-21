import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import style from './styles.module.scss';
import { GrClose } from 'react-icons/gr';
import ItemEpisodes from '../ItemEpisodes';
import axios from 'axios';

interface CardProps {
    item: any;
    // itemsEps: any;
}

export default function Items({ item }: CardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemsEps, setItemsEps] = useState([]);

    useEffect(() => {
        const api = async () => {
            const response = await axios(
                `https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`
            )

            setItemsEps(response.data)
        }

        api()
    }, [])

    const episode = itemsEps.map(episode => (episode.characters === 'Walter White'))
    const filtrado = itemsEps.find(p => p.characters === 'Walter White')
    console.log(episode)

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }
    return (
        <div className={style.cardContent}>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <h4>{item.nickname}</h4>
            <button onClick={handleOpenModal}>Ler mais</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                overlayClassName={style.charModalOverlay}
                className={style.charModalContent}
            >
                <button
                    type="button"
                    className={style.closeModal}
                    onClick={handleCloseModal}
                >
                    <GrClose />
                </button>
                <h1>{item.name}</h1>
                <div>
                    <strong>Ator:  <span>{item.portrayed}</span></strong>
                    <strong>Aniversário:  <span>{item.birthday}</span></strong>
                    <strong>Ocupação:  <span>{item.occupation}</span></strong>
                    <strong>Status:  <span>{item.status}</span></strong>
                    <strong>Episodios:  <span>{filtrado}</span></strong>
                </div>
            </Modal>
        </div>
    );
}