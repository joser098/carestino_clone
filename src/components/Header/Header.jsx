import { useState } from "react";
import ArIcon from "../../assets/ArIcon";
import CartIcon from "../../assets/CartIcon";
import Logo from "../../assets/Logo";
import MenuIcon from "../../assets/MenuIcon";
import SearchIcon from "../../assets/SearchIcon";
import styles from "./Header.module.css";

const Header = () => {
  const [dropDownState, setDropDownState] = useState(true);

  return (
    <header>
      <section className={styles.title}>
        <div>
          <button>
            <MenuIcon />
          </button>
          <button>
            <ArIcon />
          </button>
        </div>
        <a href="#">
          <Logo />
        </a>
        <div>
          <button>
            <SearchIcon />
          </button>
          <button>
            <CartIcon />
          </button>
        </div>
      </section>

      <section className={styles.Navbar}>
        <ul className={styles.mainList}>
          <li className={styles.categyList}>
            <button className={styles.btn} onClick={() => {setDropDownState(!dropDownState); console.log(dropDownState)}}>CATEGORIAS</button>
            <ul className={dropDownState ? styles.hidden : styles.show}>
              <li>
                <a href="#">Discontinuos</a>
              </li>

              <li>
                <a href="#">Cochecitos</a>
              </li>

              <li>
                <a href="#">Butacas</a>
              </li>

              <li>
                <a href="#">Cunas</a>
              </li>

              <li>
                <a href="#">Sillas</a>
              </li>

              <li>
                <a href="#">Mecedoras</a>
              </li>

              <li>
                <a href="#">Porteo</a>
              </li>

              <li>
                <a href="#">Bolsos y mochilas</a>
              </li>

              <li>
                <a href="#">Bano</a>
              </li>

              <li>
                <a href="#">Diversion</a>
              </li>

              <li>
                <a href="#">Lactancia</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">GIFTCARD</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
