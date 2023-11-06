import React from "react";
import ComparatorView from "./views/comparator/index.js";
import NewProductView from "./views/product/index.js";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NoPage from "./pages/NoPage.js";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Layout from "./Layout.js";


import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
        <HashRouter>
		    <Routes>
		        <Route path="/" element={<Layout />}>
				    <Route index element={<ComparatorView/>}/>
					<Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
		            <Route path="/product/comparator" element={<ComparatorView/>}/>
			        <Route path="/product/new" element={<NewProductView/>}/>
					<Route path="*" element={<NoPage />} />
				</Route>
		    </Routes>
            
		</HashRouter>
  );
}

export default App;
