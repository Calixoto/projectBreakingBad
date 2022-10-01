import Image from "next/image";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Modal from "react-modal";
import style from "./styles.module.scss";

interface CardProps {
  item: any;
}

export default function Card({ item }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <div className={style.cardContent}>
      <Image
        src={item.img}
        alt=""
        width={200}
        height={300}
        objectFit="cover"
        // style={{ borderRadius: "8px 8px 0 0" }}
      />
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
          <strong>
            Ator: <span>{item.portrayed}</span>
          </strong>
          <strong>
            Aniversário: <span>{item.birthday}</span>
          </strong>
          <strong>
            Ocupação: <span>{item.occupation}</span>
          </strong>
          <strong>
            Status: <span>{item.status}</span>
          </strong>
          <strong>
            Episodios: <span>1 2 3 4</span>
          </strong>
        </div>

        <h1></h1>
      </Modal>
    </div>
  );
}
