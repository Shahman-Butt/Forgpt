import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";


// import React, { Fragment, useState } from "react";
// import "./Header.css";
// import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
// import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
// import { useAlert } from "react-alert";
import { logout } from "../../actions/userAction";
// import { useDispatch, useSelector } from "react-redux";

const Home = ({ user }) => {

  // const { cartItems } = useSelector((state) => state.cart);

  // const [open, setOpen] = useState(false);
  const history = useHistory();
  // const alert = useAlert();
  // const dispatch = useDispatch();

  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <ShoppingCartIcon />, name: "Products", func: product },
    { icon: <ShoppingCartIcon />, name: "My Products", func: userProduct },
    // {
    //   icon: (
    //     <ShoppingCartIcon
    //       style={{ color: cartItems.length > 0 ? "#652D90" : "unset" }}
    //     />
    //   ),
    //   name: `Cart(${cartItems.length})`,
    //   func: cart,
    // },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  // if (user.role === "admin") {
  //   options.unshift({
  //     icon: <DashboardIcon />,
  //     name: "Dashboard",
  //     func: dashboard,
  //   });
  // }

  // function dashboard() {
  //   history.push("/admin/dashboard");
  // }

  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/account");
  }
  // function cart() {
  //   history.push("/cart");
  // }
  function product() {
    history.push("/admin/product");
    console.log("admin func 1");
  }
  function userProduct() {
    history.push("/admin/products");
    console.log("user func 1");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }







  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          {/* <div className="banner">
            <p>Welcome to Equipmentals.pk</p>
            <h1>Welcome to Equipmentals.pk</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div> */}
          {/* <div class="container"> */}
          {/* <!-- Banner --> */}

          {/* <!-- Sidebar --> */}
          <div class="row" style={{ "margin-top": "3%" }}>
            <div class="col-md-3">
              <div class="list-group" style={{ "margin": "0% 10% 0% 10%" }}>
                {/* <label  style={{"font-weight": "bold" }}>User </label> */}

                <a href="#" style={{ "font-weight": "bold", "background": "#652D90" }} class="list-group-item list-group-item-action active">
                  Options
                </a>
                <a class="list-group-item list-group-item-action" onClick={userProduct}>My Dashboard</a>
                <a class="list-group-item list-group-item-action" onClick={product}>Post Product </a>
                <a href="/me/update" class="list-group-item list-group-item-action">Update Profile</a>
                <a class="list-group-item list-group-item-action" onClick={logoutUser} >Log out</a>
              </div>
            </div>
            <div class="col-md-9">
              <div className="d-flex flex-row " style={{ "background-color": "#652d90", "width": "95%", "height": "80%", "padding": "4% 5% 0% 5%" }}>
                <div className="col">
                  <h2 style={{ "color": "white" }}>Welcome to </h2>
                  <h2 style={{ "color": "white" }}>EQUIPMENTALS.PK</h2>
                </div>
                <div className="col">
                  <p style={{ "color": "white" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
