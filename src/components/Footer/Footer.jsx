import styles from "./Footer.module.css";
import { ImGithub } from "react-icons/im";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-xxl">
        <div className="row justify-item-center">
          <div
            className={` col-xl-3 col-md-4 col-sm-5 border-bottom border-secondary pb-4 m-md-3`}
          >
            <h3>contact us</h3>
            <div className="details">
              <p>
                <b>Address: </b>Agrabad, Chittagong, Bangladesh
              </p>
              <p>
                <b>Phone: </b>
                <a href="tel:+(817) 457-30504">01843964511</a>{" "}
              </p>
              <p className="mb-4">
                <b>Hours Open: </b>
                24x7
              </p>
              <p className="mb-3">
                <b>SHOW US SOME💖ON SOCIAL MEDIA</b>
              </p>
              <div className={styles.socialIcons}>
                <a className={styles.github} href="">
                  <ImGithub size={"1.5rem"} className={styles.icon} />
                </a>
                <a className={styles.linkedin} href="">
                  <BsLinkedin size={"1.5rem"} className={styles.icon} />
                </a>
                <a className={styles.instagram} href="">
                  <BsInstagram size={"1.5rem"} className={styles.icon} />
                </a>
              </div>
            </div>
          </div>

          <div
            className={` col-xl-2 col-md-3 col-sm-5  border-bottom border-secondary pb-4 m-md-3`}
          >
            <h4>Get to Know Us</h4>
            <div className="details">
              <p>
                <NavLink className="text-dark text-decoration-none" to="/about">
                  About us
                </NavLink>
              </p>
              <p>
                <NavLink className="text-dark text-decoration-none">
                  Careers
                </NavLink>
              </p>
              <p className="mb-4">
                <NavLink className="text-dark text-decoration-none">
                  Press Releases
                </NavLink>
              </p>
              <p className="mb-3">
                <NavLink className="text-dark text-decoration-none">
                  Unique Store Science
                </NavLink>
              </p>
            </div>
          </div>
          <div
            className={` col-xl-2 col-md-3 col-sm-5  border-bottom border-secondary pb-4 m-md-3`}
          >
            <h4>Let Us Help You</h4>
            <div className="details">
              <p className="mb-2">
                <NavLink className="text-dark text-decoration-none" to="/help">
                  Help
                </NavLink>
              </p>
              <p className="mb-2">
                <NavLink className="text-dark text-decoration-none">
                  COVID-19 and Unique Store
                </NavLink>
              </p>
              <p className="mb-2">
                <NavLink className="text-dark text-decoration-none">
                  Returns Centre
                </NavLink>
              </p>
              <p className="mb-2">
                <NavLink className="text-dark text-decoration-none">
                  100% Purchase Protection
                </NavLink>
              </p>
              <p className="mb-3">
                <NavLink className="text-dark text-decoration-none">
                  Unique Store App Download
                </NavLink>
              </p>
            </div>
          </div>
          <div
            className={` col-xl-3 col-md-4 col-sm-5  border-bottom border-secondary pb-4 m-md-3 ms-md-5`}
          >
            <h4>Order Information</h4>
            <div className="details">
              <p className="mb-3">
                <NavLink className="text-dark text-decoration-none" to="/help">
                  Order Status
                </NavLink>
              </p>
              <p className="mb-2">
                <NavLink className="text-dark text-decoration-none">
                  Shipping & Delivery
                </NavLink>
              </p>
              <p className="mb-2">
                <NavLink className="text-dark text-decoration-none">
                  Returns
                </NavLink>
              </p>
              <p className="mb-2">
                <NavLink className="text-dark text-decoration-none">
                  Favorites
                </NavLink>
              </p>
              <p className="mb-3">
                <NavLink className="text-dark text-decoration-none">
                  Sell Unique Store Products
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.bottomFooter} row justify-item-center`}>
          <div className="col-xl-9 col-md-7 col-sm-6 ">
            <p>&copy; Developed by Mohammad Abdul Hamid with 💗 2025</p>
          </div>
          <div className="col-xl-3 col-md-5 col-sm-6">
            <p className={styles.privacyLink}>
              Conditions of Use & Sale Privacy Notice
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
