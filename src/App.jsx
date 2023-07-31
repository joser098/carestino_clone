import Carrousel from "./components/Carrousel/Carrousel";
import styles from './App.module.css'
import Header from "./components/Header/Header";
import slider1 from "../src/assets/slider1.webp";
import slider2 from "../src/assets/slider2.webp";
import slider3 from "../src/assets/slider3.webp";
import Box from "./components/Box/Box";
import card from './assets/card.svg';

function App() {
  return (
    <>
      <Header />

      <section>
        <Carrousel slider1={slider1} slider2={slider2} slider3={slider3} />
      </section>

      <section className={styles.boxes}>
        <Box  link={"#"} svg={card} title={"12 Cuotas"} text={"Sin interes"} />
        <Box  link={"#"}  svg={card} title={"12 Cuotas"} text={"Sin interes"} />
        <Box  link={"#"} svg={card} title={"12 Cuotas"} text={"Sin interes"} />
        <Box  link={"#"} svg={card} title={"12 Cuotas"} text={"Sin interes"} />
      </section>

    </>
  );
}

export default App;
