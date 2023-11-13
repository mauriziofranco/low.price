import { Outlet, Link } from "react-router-dom";

import './layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          <li>
            <Link to="/product/new">Register new product</Link>
          </li>
          <li>
            <Link to="/product/comparator">Products Comparator</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
