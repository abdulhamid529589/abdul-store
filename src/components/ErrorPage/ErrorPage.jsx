import styles from "./ErrorPage.module.css";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-xxl">
        <div className="row">
          <div className={`${styles.mainbox} col-12`}>
            <h1 className={styles.heading}>
              Unique <span>S</span>tore
            </h1>
            <p className={styles.error}>404 ERROR</p>
            <h2 className={styles.notFound}>Page not found.</h2>
            <p className={styles.mailus}>
              if you think page should exist, email{" "}
              <Link to={"contact"}>unique@store.in</Link>
            </p>
            <button className={styles.errorbtn} onClick={() => navigate("/")}>
              Go to Home Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
