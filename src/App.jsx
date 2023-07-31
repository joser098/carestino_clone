import Carrousel from "./components/Carrousel/Carrousel";
import styles from './App.module.css'
import Header from "./components/Header/Header";
import slider1 from "../src/assets/slider1.webp";
import slider2 from "../src/assets/slider2.webp";
import slider3 from "../src/assets/slider3.webp";
import Box from "./components/Box/Box";
import { info } from './utils/info'




function App() {
  return (
    <>
      <Header />

      <section>
        <Carrousel slider1={slider1} slider2={slider2} slider3={slider3} />
      </section>

      <section className={styles.boxes}>
        <Box  link={"#"} svg={info.box1.image} title={info.box1.title} text={info.box1.text} />
        <Box  link={"#"}  svg={info.box2.image} title={info.box2.title} text={info.box2.text} />
        <Box  link={"#"} svg={info.box3.image} title={info.box3.title} text={info.box3.text} />
        <Box  link={"#"} svg={info.box4.image} title={info.box4.title} text={info.box4.text} />
      </section>

    </>
  );
}

export default App;
