/* eslint-disable react/no-unescaped-entities */
import insta from "./../../images/insta.png";
import linkedin from "./../../images/linkedin.png";
import twitter from "./../../images/twitter.png";
import fb from "./../../images/fb.png";

const AboutUs = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <p className="text-blk heading">About Us</p>
        <p className="text-blk subHeading">
          The website www.uniqueStore.in ("uniqueStore.in") is operated by
          unique Store Seller Services Private Limited ("uniqueStore" or "us" or
          "we" or "our"), having its registered office located Arkan Housing Society, Bahaddarhat, Chittagong, Bangladesh. Please read the Conditions of Use document carefully
          before using the uniqueStore.in website. By using the uniqueStore.in
          website, you signify your agreement to be bound as protservice
          providers to fulfill orders for products or services, and to deliver
          packages. For any further details on our security practices please
          read our Privacy Notice. For any queries or issues relating to
          uniqueStore.in
        </p>
        <div className="social-icons-container">
          <a className="social-icon">
            <img className="socialIcon image-block" src={insta} />
          </a>
          <a className="social-icon">
            <img className="socialIcon image-block" src={twitter} />
          </a>
          <a className="social-icon">
            <img className="socialIcon image-block" src={fb} />
          </a>
          <a className="social-icon">
            <img className="socialIcon image-block" src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
