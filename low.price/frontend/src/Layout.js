import { Outlet, Link } from "react-router-dom";

import './layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          {/* 
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          <li>
            <Link to="/product/new">Inserisci un nuovo prodotto(CON PREZZO)</Link>
          </li>
          <li>
            <Link to="/price/new">Inserisci un nuovo prezzo(PER UN PRODOTTO GIA' CENSITO)</Link>
          </li>
          <li>
            <Link to="/product/comparator">COMPARATORE PREZZI</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
