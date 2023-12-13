import React from "react";
import ComparatorView from "./views/comparator/index.js";
import NewProductView from "./pages/product_registration/index.js";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NoPage from "./pages/NoPage.js";
import HomeView from "./views/home/index.js";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Layout from "./Layout.js";


import { HashRouter, Route, Routes } from "react-router-dom";
import NewPriceView from "./pages/price_registration/index.js";

function App() {
  
  return (
        <HashRouter>
		    <Routes>
		        <Route path="/" element={<Layout />}>
				    <Route index element={<HomeView/>}/>
					<Route path="home" element={<HomeView/>}/>
					<Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
		            <Route path="/product/comparator" element={<ComparatorView/>}/>
			        <Route path="/product/new" element={<NewProductView/>}/>
					<Route path="/price/new" element={<NewPriceView/>}/>
					<Route path="*" element={<NoPage />} />
				</Route>
		    </Routes>
            
		</HashRouter>
  );
}

export default App;
