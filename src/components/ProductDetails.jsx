import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToWishlist,
  getProductID,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import classes from "./styles.module.scss";
export const ProductDetails = () => {
  const product = useSelector((state) => state?.selectedProduct?.data?.product);

  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(getProductID(productId)); // i want to run the fetchProductDetails whem productId is present and it is empty i.e., ""
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  const handleWishlistProduct = (product) => {
    dispatch(addToWishlist(product));
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <section className={classes.productDetails}>
      <div className={classes.productDetails__image}>
        <img src={product?.image} alt="" />
      </div>
      <div className={classes.productDetails__content}>
        <h2> {product?.brand}</h2>
        <h3>{product?.title}</h3>

        <div className="rate-box">
          <h5>
            {product.rating} <i class="bx bxs-star"></i>{" "}
            <span>1.1k Ratings</span>{" "}
          </h5>
        </div>

        <hr style={{ boxShadow: "revert-layer", marginBottom: "20px" }} />

        <h2>$ {product?.price}</h2>
        <p>inclusive of all taxes</p>

        <button className={classes.productDetails__content__addtoBag}>
          <i class="bx bxs-shopping-bag" style={{ color: "#fffbfb" }}></i>
          ADD TO BAG
        </button>

        <button
          className={classes.productDetails__content__addtoWishlist}
          onClick={() => handleWishlistProduct(product)}
        >
          <i class="bx bx-heart"></i>
        </button>
      </div>
    </section>
  );
};
