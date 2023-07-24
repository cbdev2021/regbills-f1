import { FunctionComponent, useState } from "react";
import { TextField, InputAdornment, Icon, Button } from "@mui/material";
import styles from "./Registro.module.css";
import { Link, useNavigate } from "react-router-dom";

import { useRegisterMutation } from '../slices/usersApiSlice';
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../api/auth';

const Registro: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleRegister = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error('Por favor, completa todos los campos.');
      return;
    }

    try {
      const userData = await register({ name, email, password });
      console.log('Usuario registrado:', userData);
      dispatch(setCredentials({ ...userData }));
      navigate('/iniciosesion'); // Redireccionar a la página de inicio después del registro usando el hook useNavigate
    } catch (err) {
      console.error('Error de registro:', err);
      const errorMessage = err as Error;
      toast.error(errorMessage.message || 'Error de registro');
    }
  };


  return (
    <form onSubmit={handleRegister} className={styles.registro}>
      <div className={styles.registro}>
        <div className={styles.regbills}>RegBills</div>
        <div className={styles.registroChild} />
        <img className={styles.registroItem} alt="" src="/rectangle-31@2x.png" />
        <div className={styles.frame} />
        {/* <div className={styles.regbills1}>RegBills</div> */}
        <div className={styles.registroInner} />
        <b className={styles.registro1}>
          <p className={styles.registro2}>Registro</p>
        </b>
        <div className={styles.yaTienesCuentaContainer}>
          <span>¿Ya tienes cuenta? </span>
          {/* <b className={styles.iniciaSesin}> Inicia sesión</b> */}

          <Link to="/iniciosesion" className={styles.registrate}>
            <b className={styles.iniciaSesin}>Inicia sesión</b>
          </Link>

        </div>
        <b className={styles.email}>Email</b>
        <b className={styles.nombre}>Nombre</b>
        <TextField
          className={styles.rectangleTextfield}
          sx={{ width: 300 }}
          color="primary"
          variant="outlined"
          type="text"
          name="email"
          id="idEmail"
          label="Email"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <b className={styles.nombre}>Nombre</b>

        <TextField
          className={styles.registroChild1}
          sx={{ width: 300 }}
          color="primary"
          variant="outlined"
          defaultValue="Introducir acá tu nombre"
          type="text"
          name="name"
          id="idName"
          label="Name"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <b className={styles.contrasea}>Contraseña</b>

        <TextField
          className={styles.registroChild2}
          sx={{ width: 300 }}
          color="primary"
          variant="outlined"
          type="password"
          name="password"
          id="idPassword"
          label="Contraseña"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <Button
          className={styles.rectangleButton}
          sx={{ width: 300 }}
          variant="contained"
          name="crearCuenta"
          id="idCrearCuenta"
          color="primary"
          type="submit"
        >
          Crear cuenta
        </Button>


        <img
          className={styles.checkProfileIcon}
          alt=""
          src="/check-profile@2x.png"
        />
        <div className={styles.rectangleDiv} />
        <div className={styles.regbills2}>RegBills</div>
        <div className={styles.preguntasFrecuentesParent}>
          <div className={styles.preguntasFrecuentes}>Preguntas frecuentes</div>
          <div className={styles.informacinCorporativa}>
            Información corporativa
          </div>
        </div>
        <div className={styles.centroDeAyudaParent}>
          <div className={styles.preguntasFrecuentes}>Centro de ayuda</div>
          <div className={styles.preguntasFrecuentes}>
            <p className={styles.registro2}>Privacidad</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registro;
function dispatch(arg0: { payload: any; type: "auth/setCredentials"; }) {
  throw new Error("Function not implemented.");
}

