import { useContext, useEffect, useState } from "react";
import styles from "./ProductPage.module.css";
import { ProductByCategory, allProduct } from "../../services/cardProducts";
import ReactStars from "react-rating-stars-component";
import { Link, } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import LoadingScreen from './../LoadingScreen/LoadingScreen'
const ProductPage = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(15);
  const [activeCategory, setActiveCategory] = useState("All");
   const { AddItem} = useContext(CartContext);
 // eslint-disable-next-line no-unused-vars
 const [value, setValue] = useState(1);

     

  useEffect(() => {
    setIsLoading(true);
    allProduct().then((data) => {
      setAllProducts(data.products);
      setIsLoading(false);
    });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allproducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const productCards = currentProducts?.map((data, index) => {
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
              Add to Card
            </button>
          </div>
        </div>
      </div>
    );
  });

  const totalPages = Math.ceil(allproducts?.length / productsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the products section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allProductHandler = (category) => {
    setIsLoading(true);
    allProduct().then((data) => {
      setAllProducts(data.products);
      setIsLoading(false);
    });
 setActiveCategory(category);
  }

  const FilterCategoryHandler = (category) => {
    setIsLoading(true);
    ProductByCategory(category).then((list) => {
      setAllProducts(list.products);
      setIsLoading(false);
    });
     setActiveCategory(category);
  };



  return (
    <>
      <section className={styles.productBanner}>
        <div className="container-xxl">
          <div className={`${styles.productDiv} row`}>
            <div className={`${styles.data} col-12`}>
              <h2 className={styles.productHeading}>
                #100% <span className="text-white">Off On All Products</span>
              </h2>
              <p className={styles.productPara}>
                <span className={styles.hiBox}>
                  Make your orders we will deliver...
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {!isLoading && (
        <section className={styles.productsList} id="productSection">
          <div className="row m-0 pt-4">
            <div className={`${styles.filterBox} col-4`}>
              <div className="row ">
              </div>
              <div className="row">
                <div className={`${styles.filterCategory} col-12`}>
                  <h2>Category</h2>
                  <ul>
                    <li
                      onClick={() => {
                        allProductHandler("All");
                        setActiveCategory("All");
                      }}
                      className={
                        activeCategory === "All" ? styles.ActiveCategory : ""
                      }
                    >
                      All
                    </li>
                    <li
                      className={
                        activeCategory === "smartphones"
                          ? styles.ActiveCategory
                          : ""
                      }
                      onClick={() => {
                        FilterCategoryHandler("smartphones");
                        setActiveCategory("smartphones");
                      }}
                    >
                      smartphones
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("laptops");
                        setActiveCategory("laptops");
                      }}
                      className={
                        activeCategory === "laptops"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      laptops
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("fragrances");
                        setActiveCategory("fragrances");
                      }}
                      className={
                        activeCategory === "fragrances"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      fragrances
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("skincare");
                        setActiveCategory("skincare");
                      }}
                      className={
                        activeCategory === "skincare"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      skincare
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("groceries");
                        setActiveCategory("groceries");
                      }}
                      className={
                        activeCategory === "groceries"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      groceries
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("home-decoration");
                        setActiveCategory("home-decoration");
                      }}
                      className={
                        activeCategory === "home-decoration"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      home-decoration
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("furniture");
                        setActiveCategory("furniture");
                      }}
                      className={
                        activeCategory === "furniture"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      furniture
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("tops");
                        setActiveCategory("tops");
                      }}
                      className={
                        activeCategory === "tops" ? styles.ActiveCategory : ""
                      }
                    >
                      tops
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("womens-dresses");
                        setActiveCategory("womens-dresses");
                      }}
                      className={
                        activeCategory === "womens-dresses"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      womens-dresses
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("womens-shoes");
                        setActiveCategory("womens-shoes");
                      }}
                      className={
                        activeCategory === "womens-shoes"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      womens-shoes
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("mens-watches");
                        setActiveCategory("mens-watches");
                      }}
                      className={
                        activeCategory === "mens-watches"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      mens-watches
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("womens-bags");
                        setActiveCategory("womens-bags");
                      }}
                      className={
                        activeCategory === "womens-bags"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      womens-bags
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("womens-jewellery");
                        setActiveCategory("womens-jewellery");
                      }}
                      className={
                        activeCategory === "womens-jewellery"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      womens-jewellery
                    </li>
                    <li
                      onClick={() => {
                        FilterCategoryHandler("sunglasses");
                        setActiveCategory("sunglasses");
                      }}
                      className={
                        activeCategory === "sunglasses"
                          ? styles.ActiveCategory
                          : ""
                      }
                    >
                      sunglasses
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${styles.cardsBox} col-7`}>{productCards}</div>
          </div>
        </section>
      )} 
      {isLoading && <LoadingScreen/>}
      {allproducts?.length > 0 && (
        <section className={styles.pagination}>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Pre
                </button>
              </li>
              {pageNumbers.map((pageNumber) => (
                <li
                  key={pageNumber}
                  className={`page-item ${
                    pageNumber === currentPage ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </section>
      )}
    </>
  );
};

export default ProductPage;
