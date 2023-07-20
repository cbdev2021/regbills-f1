import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, Button } from "@mui/material";
import styles from "./Registro.module.css";
const Registro: FunctionComponent = () => {
  return (
    <div className={styles.registro}>
      <div className={styles.regbills}>RegBills</div>
      <div className={styles.registroChild} />
      <img className={styles.registroItem} alt="" src="/rectangle-31@2x.png" />
      <div className={styles.frame} />
      <div className={styles.regbills1}>RegBills</div>
      <div className={styles.registroInner} />
      <b className={styles.registro1}>
        <p className={styles.registro2}>Registro</p>
      </b>
      <div className={styles.yaTienesCuentaContainer}>
        <span>¿Ya tienes cuenta?</span>
        <b className={styles.iniciaSesin}> Inicia sesión</b>
      </div>
      <b className={styles.email}>Email</b>
      <b className={styles.nombre}>Nombre</b>
      <TextField
        className={styles.rectangleTextfield}
        sx={{ width: 300 }}
        color="primary"
        variant="outlined"
        defaultValue="your@mail.mail"
        type="text"
        name="email"
        id="idEmail"
        label="Email"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.registroChild1}
        sx={{ width: 300 }}
        color="primary"
        variant="outlined"
        defaultValue="Introducir acá tu nombre"
        type="text"
        name="Nombre"
        id="idNombre"
        label="Nombre"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <b className={styles.contrasea}>Contraseña</b>
      <TextField
        className={styles.registroChild2}
        sx={{ width: 300 }}
        color="primary"
        variant="outlined"
        defaultValue="introducir acá tu contraseña"
        type="text"
        name="password"
        id="idPassword"
        label="password"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <Button
        className={styles.rectangleButton}
        sx={{ width: 300 }}
        variant="contained"
        name="crearCuenta"
        id="idCrearCuenta"
        color="primary"
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
  );
};

export default Registro;
