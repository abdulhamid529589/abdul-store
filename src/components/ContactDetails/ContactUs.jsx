import ContactBanner from "./ContactBanner";
import { useNavigate } from "react-router-dom";

import styles from "./ContactSection.module.css";
import { useRef, useState } from "react";

const ContactUs = () => {
  const navigate = useNavigate();
  const NameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const [currentFocus, setCurrentFocus] = useState();

  const SuccessMessageHandler = () => {
    if (
      !(NameRef.current.value || emailRef.current.value || msgRef.current.value)
    ) {
      alert("Please Fill all Details");
      return false;
    }

    if (!NameRef.current.value) {
      setCurrentFocus("name");
      NameRef.current.focus();
      return false;
    } else if (!emailRef.current.value) {
      setCurrentFocus("email");
      emailRef.current.focus();
      return false;
    } else if (!msgRef.current.value) {
      setCurrentFocus("message");
      msgRef.current.focus();
      return false;
    }
    navigate("/success-message");
  };
  return (
    <>
      <ContactBanner />
      <section className={styles.formBox}>
        <div className="container-xxl">
          <div className="row">
            <div className={`${styles.formdata} col-12`}>
              <div className={styles.form}>
                <input
                  ref={NameRef}
                  className={`${
                    currentFocus === "name" ? styles.Focusinput : styles.input
                  }`}
                  type="text"
                  id="name"
                  placeholder="Name"
                />
                <input
                  ref={emailRef}
                  className={`${
                    currentFocus === "name" ? styles.Focusinput : styles.input
                  }`}
                  type="email"
                  id="email"
                  placeholder="Email"
                />
                <textarea
                  ref={msgRef}
                  className={`${
                    currentFocus === "name"
                      ? styles.focustextarea
                      : styles.textarea
                  }`}
                  name="message"
                  id="message"
                  cols="20"
                  rows="5"
                  placeholder="Please describe your question in details"
                ></textarea>
                <button
                  onClick={SuccessMessageHandler}
                  className={styles.submitBtn}
                >
                  Submit
                </button>
              </div>
              <div>
                <p className={styles.firstline}>Or,call us instead</p>
                <h4 className={styles.secline}>01843964511</h4>
                <div>
                  <div className={styles.boxdatas}>
                    <p className={styles.firstline}>Monday-Friday</p>
                    <p className={styles.firstline}>8:00am - 8:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
