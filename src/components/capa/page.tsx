"use client";

import styles from '@/components/capa/styles.module.css'; // Importando o arquivo CSS para estilização
import { useRouter } from 'next/navigation';

export default function Capa() {
  const router = useRouter();

  const handleReadButtonClick = () => {
    router.push('/pag_1');
  };

  return (
    <div className={styles.container}>
      <img 
        src='dragonballbanner.jpg'
        alt="Description"
        className={styles.image}
      />
      <div className={styles.description}>
        <h1>
          Dragon Ball - Volume 1
        </h1>
      </div>
      <div>
        <img
          src="dragon-ball-vol-1-s Capa.jpg"
          alt="ImgCapa"
          className={styles.capaimg}
        />
      </div>
      <div>
        <button className={styles.readButton} onClick={handleReadButtonClick}>
          Comece a Leitura
        </button>
      </div>
      <div className={styles.thanks}>
        <h1>
          Boa Leitura
        </h1>
        <h1>
          Desenvolvido por Eduardo Alcântara de Souza 
        </h1>
      </div>
    </div>    
  );
}