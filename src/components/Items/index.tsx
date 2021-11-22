import { useState } from 'react';
import style from './styles.module.scss';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';

interface CardProps {
    item: any;
}

export default function Items({ item }: CardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <button onClick={handleOpenModal}>Saber mais</button>
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
                    <strong>Episodios:  <span>1 2 3 4</span></strong>
                </div>

                <h1></h1>

            </Modal>

        </div>
    );
}