import {Link} from 'react-router-dom';
import styles from '../../components/pages/areauser.module.css';
import SubmitButton from '../../form/submitButton';


function AreaAluno(){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.titulo}>Bem Vindo Aluno</h1>
                <div className={styles.buttonBox}>
                    <Link to='/login'>
                        <SubmitButton

                            text="Sair"> 
                        </SubmitButton>
                    </Link>


                    <SubmitButton 
                    text = "Editar dados" > 
                    </SubmitButton>
                </div>
                <hr />
            </div>
            <div className={styles.box2}>



                <Link to='/cursos'>
                <SubmitButton 
                    text = "Acessar Cursos" > 
                </SubmitButton>
                </Link>
        
            </div>


        </div>

    )   
      
}
      
export default AreaAluno