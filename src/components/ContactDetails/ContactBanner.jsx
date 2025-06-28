import styles from "./ContactSection.module.css";
const ContactBanner = () => {
  return (
    <section className={styles.contactHeader}>
      <div className="container-xxl">
        <div className={`${styles.contentDiv} row`}>
          <div className={`${styles.data} col-12`}>
            <h2 className={styles.contactHeading}>#Contact Us</h2>
            <p className={styles.contactPara}>
              <span className={styles.hiBox}>Hi,</span>let us know how we can
              help!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
