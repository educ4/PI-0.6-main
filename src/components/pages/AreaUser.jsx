import {Link} from 'react-router-dom';
import styles from '../../components/pages/areauser.module.css';
import SubmitButton from '../../form/submitButton';


function AreaUser(){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.titulo}>Bem Vindo a area de usuario  </h1>
                <h1 className={styles.titulo}>Parece que você ainda não está logado:   </h1><br />
                
                    <Link to='/login'>
                         <button className={styles.button}>Login</button>
                    </Link>
                
        
            </div>


        </div>

    )   
      
}
      
export default AreaUser