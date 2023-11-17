import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); 

  const [userType, setUserType] = useState('aluno'); 

  const onSubmit = async (data) => {
    try {
      
      const response = await axios.get(
        `http://localhost:8080/${userType}/listar`,
        { params: data }
      );

      const userData = response.data;

      
      if (userData && userData.length > 0) {
        const user = userData[0];

        
        if (
          (userType === 'aluno' && user.cpf === data.id && user.senha === data.password) ||
          (userType === 'professor' && user.cfep === data.id && user.senha === data.password)
        ) {
          alert("Login feito com sucesso!", user);

          
          if (userType === 'aluno') {
            navigate('/area-aluno');
          } else if (userType === 'professor') {
            navigate('/area-professor');
          }
        } else {
          alert("Credênciais Inválidas");
        }
      } else {
        alert("Credênciais Inválidas");
      }
    } catch (error) {
      alert("Erro durante o login:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.titulo}>Login</h1>

        <div className={styles.box}>
          <label>{userType === 'aluno' ? 'CPF' : 'CFEP'}: </label>
          <input
            className={errors?.id && 'input-error'}
            type="text"
            minLength="10"
            maxLength="14"
            name="id"
            placeholder={`${userType === 'aluno' ? 'CPF' : 'CFEP'} (com pontos e traços):`}
            
            {...register('id', { required: true, minLength: 10, maxLength: 14 })}
          />
          {errors?.id?.type === 'required' && (
            <p className={styles.error}>{`${userType === 'aluno' ? 'CPF' : 'CFEP'} é requerido`}</p>
          )}
          {errors?.id?.type === 'minLength' && (
            <p className={styles.error}>{`Necessário pelo menos 10 caracteres`}</p>
          )}
        </div>

        <div className={styles.box}>
          <label> Senha: </label>
          <input
            className={errors?.password && 'input-error'}
            type="password"
            minLength="8"
            name="password"
            placeholder="Digite uma senha de 8 ou mais dígitos."
            
            {...register('password', { required: true, minLength: 8 })}
          />

          {errors?.password?.type === 'minLength' && (
            <p className={styles.error}>Senha precisa de pelo menos 8 caracteres</p>
          )}

          {errors?.password?.type === 'required' && (
            <p className={styles.error}>Senha é requerida</p>
          )}
        </div>

        <div className={styles.boxb}>
          <label>
            Escolha o tipo de usuário:
            <select onChange={(e) => setUserType(e.target.value)} value={userType}>
              <option value="aluno">Aluno</option>
              <option value="professor">Professor</option>
            </select>
          </label>
        </div>

        <div className={styles.boxb}>
          <button
            className={styles.btn}
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
