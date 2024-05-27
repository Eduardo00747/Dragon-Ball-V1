"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '@/components/pagina/styles.module.css'; // Importando o arquivo CSS para estilização

export default function Manga() {

    const router = useRouter(); // Inicialize o useHistory

    // Função para redirecionar para a página "Home"
    const handleStartButtonClick = () => {
        router.push('/'); // Redireciona para a página "Home"
    };

    // Estado para controlar o número da página atual
    const [currentPage, setCurrentPage] = useState(1);

    // Função para avançar para a próxima página
    const handleNextPage = () => {
        // Verifica se a página atual não é a última (neste caso, 30)
        if (currentPage < 31) {
            setCurrentPage(currentPage + 1); // Incrementa o número da página
        }
    };

    // Função para voltar para a página anterior
    const handlePreviousPage = () => {
        // Verifica se a página atual não é a primeira (neste caso, 1)
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1); // Decrementa o número da página
        }
    };

    // Define se o botão de página anterior deve ser visível
    const isButtonBackVisible = currentPage !== 1;

    // Define se o botão de próxima página deve ser visível
    const isButtonNextVisible = currentPage !== 31;

    return (
        <div className={styles.container}>
            <img 
                src="dragonballbanner.jpg" 
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
                    src={`${currentPage}.jpg`} // Usa o número da página para determinar a imagem a ser exibida
                    alt={`pagina_${currentPage}`}
                    className={styles.capaimg}
                />
            </div>
            <div className={styles.buttonContainer}>
                {isButtonBackVisible && (
                    <button 
                        className={styles.buttonBack}
                        onClick={handlePreviousPage} // Adiciona um evento de clique para o botão anterior
                    >
                        Página Anterior                        
                    </button>
                )}
                <button 
                    className={styles.buttonStart} // Classe para estilização do botão "buttonStart"
                    onClick={handleStartButtonClick} // Adiciona um evento de clique para o botão "buttonStart"
                >
                    Home
                </button>
                {isButtonNextVisible && (
                    <button 
                        className={styles.readButton} 
                        onClick={handleNextPage} // Adiciona um evento de clique para o botão próximo
                    >
                        Próxima Página
                    </button>
                )}
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