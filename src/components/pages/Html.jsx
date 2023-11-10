import React from "react";
import styles from './Html.module.css';
import SubmitButton from '../../form/submitButton';
import Ranking from './ranking';
import {Link} from 'react-router-dom';

function Html(){
    return(
        <div className={styles.container}>
          <div className={styles.header}>
                <h1 className={styles.titulo}>HTML 5 - Do Básico ao Avançado</h1>
                
                <div className={styles.btn}>
                    <Link to="/curso-html">
                     <SubmitButton text="Matricular-se"></SubmitButton>
                    </Link>
                </div>
          </div>
          <div className={styles.texto}>
            <p>Embarque em uma jornada educacional que abrange desde os conceitos básicos até técnicas avançadas, capacitando você a criar páginas web dinâmicas e modernas.</p>

            <p>Este curso intensivo oferece uma abordagem prática e envolvente, projetada para acelerar seu aprendizado. Explore as últimas atualizações do HTML5 e aprenda a utilizar suas poderosas características para estruturar documentos de maneira eficiente, incorporar multimídia de forma elegante e desenvolver formulários interativos.</p>

            <p>Com instrutores especializados, exercícios práticos e projetos do mundo real, você ganhará confiança na construção de sites responsivos e amigáveis para dispositivos móveis. Além disso, compreenda os princípios essenciais de acessibilidade web para garantir que suas criações sejam inclusivas e acessíveis a todos.</p>

            <p>Matricule-se agora e acelere sua jornada no desenvolvimento web com nosso curso de HTML5. Torne-se um mestre na linguagem que fundamenta a estrutura da web moderna e impulsione sua carreira na direção certa!</p>  
          </div>      
            
            <div className={styles.ranking}>
              <Link to='/ranking'>
                <button className={styles.button}>Clique Aqui para ver o ranking de nossos cursos</button>
              </Link>
            </div>
        </div>
        
    )

}

export default Html