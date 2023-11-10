import {Link} from 'react-router-dom'

import styles from './Home.module.css';


import SubmitButton from '../../form/submitButton';
import Cursos from './Cursos';
import Sobre from './sobre';



function Home(){

  
    

    return (

      <section className={styles.home_container}>
        <div  className={styles.div1}>
          <h1>Seja Bem Vindo a Elo!</h1><br />
          <h3>Junte-se a nós e trilhe o caminho do sucesso com nossos cursos de estudos de desenvolvimento!</h3>
          <Link to='/registrar'>
            <SubmitButton text="Cadastro"/>
          </Link>

          
          
        </div> 
        <Cursos/><br /><br />
        <Sobre/>
        


      </section>
      
    )
}
  
export default Home