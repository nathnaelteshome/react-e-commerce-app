import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const products = useSelector((state) => state.cart.products);

  console.log(quantity);
  console.log(products);
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbarLeft">
          <div className="language">EN</div>
          <div className="searchContainer">
            <input placeholder="serach" type="text" className="searchInput" />
            <SearchIcon style={{ color: "grey", fontSize: 16 }} />
          </div>
        </div>
        <div className="navbarCenter">
          <h1 className="logo">NATHSTORE.</h1>
        </div>
        <div className="navbarRight">
          <div className="menuItem">REGISTER</div>
          <div className="menuItem">SIGN IN</div>
          <Link to="/cart">
            <div className="menuItem">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
