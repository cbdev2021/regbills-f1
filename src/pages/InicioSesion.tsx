import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, Button } from "@mui/material";
import styles from "./InicioSesion.module.css";
const InicioSesion: FunctionComponent = () => {
  return (
    <div className={styles.iniciosesion}>
      <div className={styles.iniciosesionChild} />
      <div className={styles.regbills}>RegBills</div>
      <div className={styles.iniciosesionItem} />
      <img
        className={styles.iniciosesionInner}
        alt=""
        src="/rectangle-31@2x.png"
      />
      <div className={styles.regbills1}>RegBills</div>
      <div className={styles.rectangleDiv} />
      <b className={styles.inicioDeSesin}>Inicio de sesión</b>
      <div className={styles.inicioSesinConContainer}>
        <p className={styles.inicioSesinConTuCuentaDe}>
          <span>Inicio sesión con tu cuenta de</span>
          <b className={styles.regbills2}> RegBills</b>
        </p>
      </div>
      <div className={styles.noTienesCuentaContainer}>
        <span>¿No tienes cuenta?</span>
        <b className={styles.registrate}> Registrate</b>
      </div>
      <b className={styles.email}>Email</b>
      <TextField
        className={styles.rectangleTextfield}
        sx={{ width: 300 }}
        color="primary"
        variant="outlined"
        defaultValue="your@email.mail"
        type="text"
        name="email"
        id="idEmail"
        label="Email"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <b className={styles.contrasea}>Contraseña</b>
      <TextField
        className={styles.iniciosesionChild1}
        sx={{ width: 300 }}
        color="primary"
        variant="outlined"
        defaultValue="Introducir acá tu contraseña"
        type="password"
        name="password"
        id="idPassword"
        label="Contraseña"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <Button
        className={styles.rectangleButton}
        sx={{ width: 300 }}
        variant="contained"
        name="iniciar"
        id="idIniciar"
        color="primary"
      >
        Iniciar sesión
      </Button>
      <img
        className={styles.checkProfileIcon}
        alt=""
        src="/check-profile@2x.png"
      />
      <div className={styles.preguntasFrecuentesParent}>
        <div className={styles.preguntasFrecuentes}>Preguntas frecuentes</div>
        <div className={styles.informacinCorporativa}>
          Información corporativa
        </div>
      </div>
      <div className={styles.centroDeAyudaParent}>
        <div className={styles.preguntasFrecuentes}>Centro de ayuda</div>
        <div className={styles.preguntasFrecuentes}>
          <p className={styles.inicioSesinConTuCuentaDe}>Privacidad</p>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
