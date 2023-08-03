import Carrousel from "./components/Carrousel/Carrousel";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Box from "./components/Box/Box";
import Card from "./components/Card/Card";
import { info, cards, sliders } from "./utils/info";
import Footer from "./components/Footer/Footer";
import InfoFooter from "./components/InfoFooter/InfoFooter";
import { useEffect, useState } from "react";

function App() {
  const [toogle, setToogle] = useState(false);


  useEffect(() => {
    const check = () => {
      const warning = JSON.parse(window.localStorage.getItem("warning"));
      if(warning) return;
      alert("IMAGENES Y LOGOS PERTENECEN A www.carestino.com")
      window.localStorage.setItem("warning","true")
    }

    check()
  }, [])

  return (
    <>
      <Header />

      <section>
        <Carrousel
          slider1={sliders.slider1}
          slider2={sliders.slider2}
          slider3={sliders.slider3}
        />
      </section>

      <section className={styles.boxes}>
        <Box
          link={"#"}
          svg={info.box1.image}
          title={info.box1.title}
          text={info.box1.text}
        />
        <Box
          link={"#"}
          svg={info.box2.image}
          title={info.box2.title}
          text={info.box2.text}
        />
        <Box
          link={"#"}
          svg={info.box3.image}
          title={info.box3.title}
          text={info.box3.text}
        />
        <Box
          link={"#"}
          svg={info.box4.image}
          title={info.box4.title}
          text={info.box4.text}
        />
      </section>

      <footer className={styles.footer}>
        <section className={styles.cards}>
          <Card img={cards.card_blog} />
          <Card img={cards.card_seguimiento} />
          <Card img={cards.card_trabaja} />
        </section>

        <section>
          <div className={styles.InfoFooter}>
            <button onClick={() => setToogle(!toogle)}>
              {toogle ? "Ocultar informacion" : "Mas informacion"}
            </button>
          </div>
          <div className={toogle ? styles.show : styles.hidden}>
            <InfoFooter />
          </div>
          <Footer />
        </section>
      </footer>
    </>
  );
}

export default App;
