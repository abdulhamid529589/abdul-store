import ContactBanner from "./ContactBanner";
import styles from "./ContactSection.module.css";
import { NavLink } from "react-router-dom";
const SuccessMessage = () => {
  return (
    <>
      <ContactBanner />
      <section className={styles.successMsg}>
        <div className="container-xxl"></div>
        <div className="row m-0">
          {/* <div className="col-12 m-0 p-0"> */}
          <div className={`${styles.msgdata} col-12`}>
            <p>
              Thank you for contacting us, we will be in touch shortly! if your
              inquiry is urgent, you may want to reach out to your neigborhood
              Unique Store or Market District directly.
            </p>
            <NavLink className={styles.msgLink} to="/product">
              Back to Shopping
            </NavLink>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default SuccessMessage;
