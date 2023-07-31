import styles from "./Box.module.css";

const Box = ({link, svg, title, text }) => {
  return (
    <a href={link} className={styles.container}>
        <img src={svg} alt={title} />
        <h4>{title}</h4>
        <p>{text}</p>
    </a>
  );
};

export default Box;
