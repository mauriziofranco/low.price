
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import * as Constants from "./constants.js";
import LowPriceReactTable from './LowPriceReactTable.js';

class App extends Component {

    state = {
        mealCategoriesList: [],
        mealCategoriesFromApi: [],
        defaultMealCategories: [{id: 0, label: "Seleziona una categoria di prodotto"}],
        selectedMealCategoryId: 0,
        mealSubCategoriesList: [],
        mealSubCategoriesFromApi: [],
        defaultMealSubCategories: [{id: 0, label: "Seleziona una categoria specifica di prodotto, per categoria scelta"}],
        filteredProductsList: [],
        productsFromApi: []
    };

    componentDidMount() {
        this.fetchMealCategories();
        this.fetchMealSubCategories();
        this.fetchProducts();
        //this.prepareMealCategoriesListForSelect();
    }
    
    fetchProducts = () => {
        fetch(Constants.PRODUCTS_API)
            .then(
				response => response.json().then(data => ({ status: response.status, body: data }))
			)
			.then((data) => {
				let fetchedProductsFromApi = data.body._embedded.products;
                this.setState({productsFromApi: fetchedProductsFromApi});
                this.updatedFilteredProductsList();
			})
    };

    updatedFilteredProductsList = () => {
        console.log("updatedFilteredProductsList - START");
        let productsFromApi = [...this.state.productsFromApi] ;
        /*
            let defaultMealSubCategories=[...this.state.defaultMealSubCategories];
            console.log(defaultMealSubCategories.length);
            console.log(fetchedMealSubCategoriesFromApi);
            console.log(this.state.selectedMealCategoryId===0);
            const selectedMealCategoryId = this.state.selectedMealCategoryId ;
            let mealSubCategoriesListForSelect = defaultMealSubCategories.concat(fetchedMealSubCategoriesFromApi.filter(
                mealSubCategory => (selectedMealCategoryId===0) || (mealSubCategory.meal_category_id===selectedMealCategoryId)
            ));
            console.log(mealSubCategoriesListForSelect.length);
            */
            const filteredProductsList = productsFromApi.map(
                product => <li><img src={"./images/"+product.image_file_name} alt={product.product_name} width="50" height="50" /> - {product.product_name}</li>
            );
            this.setState({filteredProductsList: filteredProductsList});
        }

    fetchMealSubCategories = () => {
        fetch(Constants.MEAL_SUB_CATEGORIES_API)
            .then(
				response => response.json().then(data => ({ status: response.status, body: data }))
			)
			.then((data) => {
				let fetchedMealSubCategoriesFromApi = data.body._embedded.mealSubCategories;
                this.setState({mealSubCategoriesFromApi: fetchedMealSubCategoriesFromApi});
                //this.prepareMealSubCategoriesListForSelect(fetchedMealSubCategoriesFromApi);
                this.prepareMealSubCategoriesListForSelect();
			})
    };
    
    //prepareMealSubCategoriesListForSelect = (fetchedMealSubCategoriesFromApi) => {
    prepareMealSubCategoriesListForSelect = () => {
    console.log("prepareMealSubCategoriesListForSelect.START");
        let fetchedMealSubCategoriesFromApi = [...this.state.mealSubCategoriesFromApi] ;
        let defaultMealSubCategories=[...this.state.defaultMealSubCategories];
        console.log(defaultMealSubCategories.length);
        console.log(fetchedMealSubCategoriesFromApi);
        console.log(this.state.selectedMealCategoryId===0);
        const selectedMealCategoryId = this.state.selectedMealCategoryId ;
        let mealSubCategoriesListForSelect = defaultMealSubCategories.concat(fetchedMealSubCategoriesFromApi.filter(
            mealSubCategory => (selectedMealCategoryId===0) || (mealSubCategory.meal_category_id===selectedMealCategoryId)
        ));
        console.log(mealSubCategoriesListForSelect.length);
        this.setState({mealSubCategoriesList: mealSubCategoriesListForSelect});
    }
    
    fetchMealCategories = () => {
        fetch(Constants.MEAL_CATEGORIES_API)
            .then(
				response => response.json().then(data => ({ status: response.status, body: data }))
			)
			.then((data) => {
				let fetchedMealCategoriesFromApi = data.body._embedded.mealCategories;
                this.setState({mealCategoriesFromApi: fetchedMealCategoriesFromApi});
                //this.prepareMealCategoriesListForSelect(fetchedMealCategoriesFromApi);
                this.prepareMealCategoriesListForSelect();
			})
    };
    
    //prepareMealCategoriesListForSelect = (fetchedMealCategoriesFromApi) => {
      prepareMealCategoriesListForSelect = () => {
        let fetchedMealCategoriesFromApi = [...this.state.mealCategoriesFromApi]
        let defaultMealCategories=[...this.state.defaultMealCategories];
        //console.log(defaultMealCategories);
        //console.log(fetchedMealCategoriesFromApi);
        let mealCategoriesListForSelect = defaultMealCategories.concat(fetchedMealCategoriesFromApi);
        this.setState({mealCategoriesList: mealCategoriesListForSelect});
    }
    
    handleMealCategoryChange = (data) => {
        console.log(data.target.value);
        this.setState({selectedMealCategoryId:parseInt(data.target.value)},
            () => {
                this.prepareMealSubCategoriesListForSelect();
            }
        );
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
            <select name="selectedMealCategory" onChange={this.handleMealCategoryChange} >
	            {this.state.mealCategoriesList.map(mealCategory => (
				  <option key={mealCategory.id} value={mealCategory.id}>
				    {mealCategory.label}
				  </option>
				))}
			</select>
			<select name="selectedMealSubCategory" onChange={this.handleMealSubCategoryChange} >
	            {this.state.mealSubCategoriesList.map(mealSubCategory => (
				  <option key={mealSubCategory.id} value={mealSubCategory.id}>
				    {mealSubCategory.label}
				  </option>
				))}
			</select>
            <img src={logo} className="App-logo" alt="logo"/>
            <h3 className="App-title">{this.state.message}</h3>
            </header>
            <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <LowPriceReactTable/>
            <ul>
                <li>Creola Katherine Johnson: mathematician</li>
                <li>Mario José Molina-Pasquel Henríquez: chemist</li>
                <li>Mohammad Abdus Salam: physicist</li>
                <li>Percy Lavon Julian: chemist</li>
                <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
            </ul>
            <ul>{this.state.filteredProductsList}</ul>
        </div>
    );
    }
}

export default App;
