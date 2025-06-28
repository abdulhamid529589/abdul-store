/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import styles from "./HomeDetails.module.css";
import { product } from "../../services/cardProducts";
import { FcShipped } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { AiOutlineNumber } from "react-icons/ai";
import { BiSolidCollection } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import LoadingScreen from "./../LoadingScreen/LoadingScreen";

const HeroSection = () => {
  const [products, setProducts] = useState();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(1);
  const { AddItem } = useContext(CartContext);
  const [isLading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    product().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const productCatds = products?.products.map((data, index) => {
    return (
      <div key={index} className={`${styles.card} col-4`}>
        <div className={styles.imgBox}>
          <img src={data.thumbnail} alt="product Image" />
        </div>
        <div>
          <p className={styles.brandName}>{data.brand}</p>
          <p className={styles.titleName}>{data.title}</p>
          <div className={styles.brandReview}>
            <ReactStars
              count={5}
              edit={false}
              value={data.rating}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className={styles.price}>
            ${data.price}{" "}
            <span className={styles.disRate}>
              {Math.round(
                (data.price * data.discountPercentage) / 100 + data.price
              )}
            </span>
            <span className={styles.disRateoff}>
              {`min. ${Math.round(data.discountPercentage)}% Off`}
            </span>
          </div>
          <div className={styles.btnBOx}>
            <div className={styles.moneyBox}>
              <div className={styles.viewDetails}>
                <Link to={`/product/${data.id}`}>View Details</Link>
              </div>
            </div>
            <button
              onClick={() =>
                AddItem(data.thumbnail, data.title, data.price, value, data.id)
              }
              className={styles.moneybtn}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <section className={styles.hero}>
        <div className="container-xxl">
          <div className="row">
            <div className={`${styles.hero_details}`}>
              <p className={styles.smallone}>Trade-in-offer</p>
              <h3 className={styles.boldone}>Super value deals</h3>
              <h3 className={styles.colorone}>On all products</h3>
              <p className={styles.paraone}>
                Save more with coupons & up to 70% off!
              </p>
              <button className={styles.shopNowBtn}>
                <a href="#productSection">Shop Now</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.plantSection}>
        <div className="container-xxl">
          <div className="row">
            <div className={styles.plantDetails}>
              <h1 className={styles.plantheading}>WE PLANT GOODNESS</h1>
              <h2 className={styles.plantnum}>482463</h2>
              <p className={styles.plantpara}>
                Threes have got life already...
              </p>
              <p className={styles.plantpara}>
                Evertime you buy from us, we plant more trees!
              </p>
              <button className={styles.plantbtn}>Know More</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.goodnessPlant}>
        <div className="container-xxl">
          <div className={styles.goodnesssBox}>
            <h1>We Plant Goodness</h1>
            <p>
              Today, the world needs goodness and every small good action will
              go a long way for our environment. That's why we plant trees for
              every order we receive. Each tree is spreading goodness by making
              the air cleaner, reducing carbon footprints, improving farmers'
              livelihoods, and creating a greener environment for all of us.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.productsList} id="productSection">
        <div className={styles.fashionHeading}>Top Deals of Fashin</div>
        {/* <div className="row m-0 p-0"> */}
        {!isLading && (
          <div className={`${styles.cardsBox} row`}>{productCatds}</div>
        )}
        {isLading && <LoadingScreen />}
        {/* </div> */}
      </section>

      <section className={styles.servicesDetails}>
        <div className="container-xxl">
          <div className="row">
            <div className={styles.serviceBox}>
              <div className={styles.serviceCard}>
                <span className={styles.serviceIcon}>
                  <FcShipped size={"2rem"} />
                </span>
                <span>Delivery</span>
                <p>Shop from home and get it delivered to your front door.</p>
              </div>
              <div className={styles.serviceCard}>
                <span className={styles.serviceIcon2}>
                  <BiSolidCollection size={"2rem"} color="brown" />
                </span>
                <span>Click & Collect</span>
                <p className="mt-3">Buy online, pick-up in store.</p>
              </div>
              <div className={styles.serviceCard}>
                <span className={styles.serviceIcon2}>
                  <AiOutlineNumber color="red" size={"2rem"} />
                </span>
                <span>Taskrabbit</span>
                <p>Find flexible and affordable ways to get your to-dos.</p>
              </div>
              <div className={styles.serviceCard}>
                <span className={styles.serviceIcon2}>
                  <MdPayment color="purple" size={"2rem"} />
                </span>
                <span>Ways to pay</span>
                <p>Finance your dream home with our credit cards. </p>
              </div>
              <div className={styles.serviceCard}>
                <span className={styles.serviceIcon}>
                  <GiReturnArrow size={"2rem"} />
                </span>
                <span>Return</span>
                <p>return from home we come to your front door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.newsletterBox}>
        <div className="container-xxl">
          <div className={`row ${styles.newsBoxparent}`}>
            <div className={`${styles.newbox} col-6`}>
              <h4 className={styles.newsHeading}>Sign up For Newsletters</h4>
              <p className={styles.newspara}>
                Get E-mail updates about our latest shop and{" "}
                <span>Spacial offers</span>
              </p>
            </div>
            <div className={`${styles.inputletter} col-5`}>
              <input type="email" placeholder="Your email address" />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
