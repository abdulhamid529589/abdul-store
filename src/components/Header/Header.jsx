import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { FiSearch, } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { RiMenu3Fill } from "react-icons/ri";

// eslint-disable-next-line no-unused-vars
import { BsMoonStars } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const Header = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { cartList } = useContext(CartContext);
  const { userName, isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const linkStyle = () => {
    return ({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? styles.active : styles.deActive;
  };

  const togglemenuHandler = () => {
    setIsHidden(!isHidden);
  };

  const showMenu = isHidden ? "hideMemu" : "unHideMenu";

  const menuVisibilityHandler = () => {
    if (!isHidden) {
      setIsHidden(true);
    }
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.logoBox} col-2`}>
        <NavLink to="/" onClick={menuVisibilityHandler} className={styles.logo}>
          <span>U</span>nique Store
        </NavLink>
      </div>

      <div className={`${styles.inputBox} col-2`}>
        <input type="text" placeholder="Search Products..." />
        <button>
          <FiSearch />
        </button>
      </div>

      <div className={`${styles.menuBox} col-4`}>
        <ul className={styles.menuList}>
          <li>
            <NavLink to="/" className={linkStyle()}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className={linkStyle()}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkStyle()}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkStyle()}>
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={`${styles.profileCardBox} col-3`}>
        <div
          onClick={() => {
            navigate("/login");
            menuVisibilityHandler();
          }}
          className={styles.profileBox}
        >
          <VscAccount size={"1.4rem"} cursor={"pointer"} />
          <div>{isLogin ? userName : "Login"}</div>
        </div>
        <div
          onClick={() => {
            navigate("/cart");
            menuVisibilityHandler();
          }}
          className={styles.cartBox}
        >
          <div className={styles.customCartIcon}>
            <AiOutlineShoppingCart
              style={{ cursor: "pointer" }}
              size="1.6rem"
            />

            {cartList.length > 0 && (
              <div className={styles.cartCount}>{cartList.length}</div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.menuBtn} onClick={togglemenuHandler}>
        <RiMenu3Fill fontSize={"1.4rem"} />
      </div>
      <div
        className={` ${showMenu} ${styles.toogleMenuList}`}
        style={isHidden ? { display: "none" } : { display: "block" }}
      >
        <ul className={` ${styles.togglemenuListUl}`}>
          <li>
            <NavLink
              onClick={() => setIsHidden(true)}
              to="/"
              className={linkStyle()}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsHidden(true)}
              to="/product"
              className={linkStyle()}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsHidden(true)}
              to="/about"
              className={linkStyle()}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsHidden(true)}
              to="/contact"
              className={linkStyle()}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
