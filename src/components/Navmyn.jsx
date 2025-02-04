import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
export const Navmyn = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__logo}>
        <Link to="/">
          <h1>ElexaMart</h1>
        </Link>
      </div>

      <div className={classes.navbar__searchBar}>
        <i class="bx bx-search"></i>
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className={classes.navbar__sideMenu}>
        <Link to="/wishlist" className={classes.navbar__sideMenu__wishlist}>
          <div>
            <i class="bx bx-heart"></i>
            <span> Wishlist</span>
          </div>
        </Link>
        <Link className={classes.navbar__sideMenu__bag}>
          <div>
            <i class="bx bx-shopping-bag"></i>
            <span> Bag</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
