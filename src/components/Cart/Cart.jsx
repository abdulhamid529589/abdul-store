/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";
import { MdDelete } from "react-icons/md";
import cartImage from "./../../images/cartBin.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Cart = () => {
  const { cartList, updateCartItemQuantity, removeItemFromCart } =
    useContext(CartContext);
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleIncrement = (item) => {
    updateCartItemQuantity(item.id, item.value + 1);
  };

  const handleDecrement = (item) => {
    if (item.value > 1) {
      updateCartItemQuantity(item.id, item.value - 1);
    }
  };

  const TotalPrice = () => {
    let total = 0;
    cartList.forEach((item) => {
      total += item.price * item.value;
    });
    return total;
  };

  const ConfirmDeliveryHandler = () => {
    if (isLogin) {
      navigate("/address");
    } else {
      navigate("/login");
    }
  };

  const emptyMessage = () => {
    if (cartList.length === 0) {
      return (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5>Cart</h5>
              </div>
              <div className="card-body cart">
                <div className="col-sm-12 empty-cart-cls text-center">
                  <img
                    src={cartImage}
                    width="130"
                    height="130"
                    className="img-fluid mb-4 mr-3"
                  />
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>
                  <h4>Add something to make me happy :)</h4>
                  <NavLink
                    to={"/product"}
                    href="#"
                    className="btn btn-primary cart-btn-transform m-3"
                    data-abc="true"
                  >
                    continue shopping
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  const ProceedToPay = () => {
    if (cartList.length !== 0) {
      return (
        <div className=" card">
          <div className="d-flex justify-content-center align-items-center mt-4 fw-bold">
            <h4>Total Amount: ${TotalPrice()} </h4>
          </div>
          <div className="card-body text-center">
            <button
              onClick={ConfirmDeliveryHandler}
              type="button"
              className="btn btn-warning btn-block btn-lg"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      );
    }
  };

  const cartCard = cartList?.map((item, index) => {
    return (
      <div key={index} className="card rounded-3 mb-4">
        <div className="card-body p-4">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img
                src={item.image}
                className="img-fluid rounded-3"
                alt="Cotton T-shirt"
              />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <p className="lead fw-normal mb-2">{item.title}</p>
            </div>
            <div
              className={`col-md-3 col-lg-3 col-xl-2 d-flex ${styles.stockBtns}`}
            >
              <button
                className={` px-2  ${styles.inc}`}
                onClick={() => handleIncrement(item)}
              >
                +
              </button>

              <div className={styles.valueBox}>{item.value}</div>

              <button
                className={` px-2 ${styles.dic}`}
                onClick={() => handleDecrement(item)}
              >
                -
              </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 className="mb-0">${item.price * item.value}</h5>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <button
                onClick={() => removeItemFromCart(item.id)}
                className={` px-2 ${styles.deleteBtn}`}
              >
                <MdDelete color="red" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            </div>

            {cartCard}
            {emptyMessage()}

            {ProceedToPay()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
