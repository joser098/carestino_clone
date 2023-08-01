import { useState } from "react";
import styles from "./InfoFooter.module.css";
import logo from "../../assets/logo.svg";
import btn from "../../assets/btn.svg";

const InfoFooter = () => {
  const [classToogle, setClassToogle] = useState(false);

  return (
    <section className={styles.container}>
      {/* <button>Más información</button> */}
      <div className={styles.contact}>
        <img src={logo} alt="logo" />
        <p>Escribinos las 24 hs.</p>
        <p>
          Tel. <span>011 XXXX-XXXX</span>
        </p>
        <p>
          Whatsapp. <span>+54 9 11 XXXX-XXXX</span>
        </p>
        <p>
          E-mail <span>josejaramillo098@gmail.com</span>
        </p>
      </div>

      <div className={styles.call}>
        <p>Solicitar llamado</p>
        <span>Ingresá tu número de teléfono y nos comunicaremos con vos.</span>
        <form action="">
          <input className={styles.prefix} placeholder="011" type="number" />
          <input className={styles.formInput} placeholder="Ingrese su numero" type="number" />
          <button>
            <img src={btn} alt="button" />
          </button>
        </form>
      </div>

      <div className={styles.newsletter}>
        <p>Newsletter</p>
        <span>
          Suscribite a nuestro Newsletter y recibí todas las noticias y
          promociones en tu e-mail.
        </span>
        <form action="">
          <input className={styles.formInput} type="email" placeholder="email"/>
          <button>
            <img src={btn} alt="button" />
          </button>

          <span className={styles.terms}>
           <input className={styles.checkbox} type="checkbox" />
            He leído y acepto la <a href="#">Política de Privacidad</a>
          </span>
        </form>
      </div>
    </section>
  );
};

export default InfoFooter;
