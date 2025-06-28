import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import styles from './ProductDetails.module.css'
import { singleProduct } from "../../services/cardProducts";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import LoadingScreen from '../LoadingScreen/LoadingScreen'

const ProductDetailsPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
   const [value, setValue] = useState(1);
  const navigate = useNavigate(); 
   const [selectedImage, setSelectedImage] = useState(null);
   const [isLoading, setIsLoading] = useState(false)

   const thumbnail = product[0]?.thumbnail;
   const title = product[0]?.title;
   const price = product[0]?.price;
   const pid = product[0]?.id;

  useEffect(() => {
    setIsLoading(true)
    singleProduct(id).then((details) => {
      setProduct([details]);
      setIsLoading(false)
       setSelectedImage(details.thumbnail);
    });
  }, [id]);

  const { AddItem} = useContext(CartContext);

  const productDetailsCard = product?.map((data, index) => {
    return (
      <div key={index} className="row mt-xl-5 pt-xl-5">
        <div className="col-md-6">
          <div className={`row ${styles.imageContainer}`}>
            <div className={styles.imageBox}>
              <img
                className="image-fluid"
                src={selectedImage}
                alt="productImg"
              />
            </div>
            <div className={styles.imagesList}>
              <div className="image">
                <img
                  src={data.images[0]}
                  onClick={() => setSelectedImage(data.images[0])}
                  alt=""
                />
              </div>
              <div className="image">
                <img
                  src={data.images[1]}
                  onClick={() => setSelectedImage(data.images[1])}
                  alt=""
                />
              </div>
              <div className="image">
                <img
                  src={data.images[2]}
                  onClick={() => setSelectedImage(data.images[2])}
                  alt=""
                />
              </div>
              <div className="image">
                <img
                  src={data.images[3]}
                  onClick={() => setSelectedImage(data.images[3])}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-md-5">
          <h2 className={styles.titleName}>{data.title}</h2>
          <p className={styles.brandName}>{data.brand}</p>
          <div>
            <p></p>
          </div>
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
          <div className={styles.discription}>
            {data.description} Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. At suscipit consequuntur aperiam nisi nemo
            expedita?
          </div>
          <div className={styles.stockBtns}>
            <button
              className={styles.dic}
              onClick={() => {
                if (value > 0) {
                  setValue(value - 1);
                }
              }}
            >
              -
            </button>
            <div>{value}</div>
            <button
              className={styles.inc}
              onClick={() => {
                if (value < data.stock) {
                  setValue(value + 1);
                }
              }}
            >
              +
            </button>
          </div>
          <div className={styles.downBtn}>
            <button
              onClick={() => AddItem(thumbnail, title, price, value, pid)}
              className={styles.addToCardBtn}
            >
              Add to Card
            </button>
            <button
              onClick={() => {
                navigate("/cart");
                AddItem(thumbnail, title, price, value, pid);
              }}
              className={styles.buyBtn}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="container mt-5 mb-5 pb-5">{!isLoading && productDetailsCard}
  {isLoading && <LoadingScreen/>}
  </div>;
};

export default ProductDetailsPage;
