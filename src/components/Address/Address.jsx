import { useRef } from 'react';
import imageDelevery from '../../images/delivery.webp';
import styles from './Address.module.css';
import { useNavigate } from 'react-router-dom';
const Address = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const addressRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const emailRef = useRef();
const navigate = useNavigate();
const deliveryHandler =() =>{
  if(!(fnameRef.current.value && lnameRef.current.value && addressRef.current.value && stateRef.current.value && cityRef.current.value && zipRef.current.value && emailRef.current.value)){
    alert(' Please Fill All Detaisl :)')
    return false;
  }
  else{
        navigate('/reqRecive');
  }
}


  return (
    <div className="container m-md-4 p-md-4">
      <div className="row">
        <div className={`col-12 ${styles.mainBox}`}>
          <div className={styles.imageBox}>
            <img src={imageDelevery} alt="" />
            <div className={styles.messageBox}>
              <h4> Everything at your doorstep. </h4>
              <p>You are 30 seconds away from compleating your order!</p>
              <button onClick={() => navigate('/cart')} className={styles.backBtn}>GO BACK</button>
            </div>
          </div>
          <div className={styles.infoBox}>
            <h2 className={styles.headingLine}>DELIVERY INFO</h2>
            <div className={styles.inputBox}>
              <input
                ref={fnameRef}
                type="text"
                name=""
                id=""
                placeholder="First name"
                required
              />
              <input
                ref={lnameRef}
                type="text"
                name=""
                id=""
                placeholder="Last name"
                required
              />
              <input
                ref={addressRef}
                type="text"
                name=""
                id=""
                placeholder="Address"
                required
              />
              <input
                ref={stateRef}
                type="text"
                name=""
                id=""
                placeholder="State"
                required
              />
              <input
                ref={cityRef}
                type="text"
                name=""
                id=""
                placeholder="City"
                required
              />
              <input
                ref={zipRef}
                type="text"
                name=""
                id=""
                placeholder="Zip"
                required
              />
              <input
                ref={emailRef}
                className={styles.emailBox}
                type="email"
                name=""
                id=""
                placeholder="Email"
                required
              />
            </div>
            <button onClick={deliveryHandler} className={styles.placedBtn}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;