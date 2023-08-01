import styles from "./Card.module.css";

const Card = ({ img }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="card"/>
      <button>Ver más</button>
    </div>
  );
};

export default Card;
