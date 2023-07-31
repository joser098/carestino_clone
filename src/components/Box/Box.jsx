import styles from "./Box.module.css";

const Box = ({link, svg, title, text }) => {
  return (
    <div className={styles.container}>
      <a href={link}>
        <img src={svg} alt={title} />
        <h4>{title}</h4>
        <p>{text}</p>
      </a>
    </div>
  );
};

export default Box;
