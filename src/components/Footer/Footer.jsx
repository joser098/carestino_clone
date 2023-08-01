import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.links} >
        <ul>
          <li>
            <a href="#">Envíos</a>
          </li>
          <li>
            <a href="#">Seguimiento</a>
          </li>
          <li>
            <a href="#">Tiendas</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Manuales</a>
          </li>
          <li>
            <a href="#">Trabajar en Carestino</a>
          </li>
          <li>
            <a href="#">Política de Privacidad</a>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <p>Carestino ©2023 Todos los derechos reservados</p>
      </div>
    </>
  );
};

export default Footer;
