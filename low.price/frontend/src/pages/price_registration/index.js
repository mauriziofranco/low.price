import React, {Component} from 'react';

import * as Commons from '../../commons.js';
import * as Constants from '../../constants.js';

import { Button } from 'react-bootstrap';
import LowPriceDefaultSelect from '../../commons/components/default-select/index.js';

import './index.css';
import BarcodeDiv from '../new_product_introduction/components/commons/barcode_section/index.js';

export default class NewPriceView extends Component {
	
	componentDidMount() {			
	    this.initializeInsertDateTime();
    }
	
	constructor (props) {
		super(props);
		// this.goBack = this.goBack.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.initializeProductStateProperties = this.initializeProductStateProperties.bind(this);
		
		this.state = {
			barcode_number: 8017596002617,
            product_name: '',
			product_description: '',
			manufacturer_name: '',
			unit_of_measure: '', 
			measure: '',
			store_id: '', 
			selling_prize: '',
			list_prize: '',
			department_id: '',
			product_insert_datetime: '',
			meal_id: '',
			meal_category_id: '',
			meal_sub_category_id: '',

			imgPreviewSrc: null
	}

}

	initializeProductStateProperties = (product) => {
		const inputProduct = {...product} ;
        // this.setState(
		// 	{
		// 	product_name: product.product_name
		// }
		// )
		this.setState(
			inputProduct
		);
		this.setState(
			{ imgPreviewSrc: inputProduct.full_path_image_file_name}
		);
		// this.initializeInsertDateTime();
	}
	// redirectToCandidatesList = () => {
	//     this.setState({
	//       redirect: true
	//     })
	//   }

	//  renderRedirect = () => {
	//       if (this.state.redirect) {
	//     	  let target = '/candidates/'+this.state.positionCode ;
	//           return <Redirect to={target} />
	//       }
	//   }
	
	// fetchCourseCodes = () =>{
	// 	Commons.executeFetch (Constants.FULL_COURSEPAGE_API_URI, 'GET', this.setCourseCodes);
	// }
  
  initializeInsertDateTime = () => {
	var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
	var localISOString = new Date(Date.now() - tzoffset)
		.toISOString()
		.slice(0, -1);

		console.log(localISOString);
	// convert to YYYY-MM-DDTHH:MM
	const datetimeInputString = (localISOString.substring(
		0,
		((localISOString.indexOf("T") | 0) + 6) | 0
	));
	console.log(datetimeInputString);
	this.setState({product_insert_datetime: datetimeInputString})
  }

//   fetchUnitsOfMeasure = () =>{
//     Commons.executeFetchWithHeader(Constants.UNITS_OF_MEASURE_API, "GET", null, this.fetchUnitsOfMeasureSuccess, Commons.operationError, null);
//   }

//   fetchStores = () =>{
//     Commons.executeFetchWithHeader(Constants.FULL_STORES_API, "GET", null, this.fetchStoresSuccess, Commons.operationError, null);
//   }
  

//   fetchUnitsOfMeasureSuccess = (data) => {
//       this.setState({ unitsOfMeasureFromApi: data._embedded.unitOfMeasures });
//       let unitsOfMeasureListForSelect = [...this.state.unitsOfMeasureListForSelect].concat(
//         data._embedded.unitOfMeasures.map(
//           (item) => ({
//             id: item.id, 
//             label: (item.unit_of_measure_label + (item.description!=null?(" - ("+item.description+")"):"")) 
//           })
//         )
//       );
// 	  console.log("unitsOfMeasureListForSelect: ", unitsOfMeasureListForSelect);
//       this.setState({unitsOfMeasureListForSelect: unitsOfMeasureListForSelect});
      
//   }

//   fetchStoresSuccess = (data) => {
//     // console.log("fetchStoresSuccess - START");
//     this.setState({ storesFromApi: data });
//       let storesListForSelect = [...this.state.storesListForSelect].concat(
//         data.map(
//           (item) => ({
//             id: item.store_id, 
//             label:  item.brand_name + " - " + item.store_city

//           })
//         )
//       );

// 	  console.log("storesListForSelect: ", storesListForSelect);
//       this.setState({storesListForSelect: storesListForSelect});
//     // console.log(data);
//     // console.log(data);
//     // console.log("fetchStoresSuccess - END");
//     this.setState({ storesListForSelect: storesListForSelect });
// }
	
	// setCourseCodes = (responseData) => {
	// 	this.setState({ courseCodes: responseData });
	// }
	  
	  handleSubmit = (event) =>  {
	    console.log(this.state);
	    event.preventDefault();
	    this.sendInsertRequest();
	  }
	
	sendInsertRequest = () => {
		const formData = new FormData();

		const fileInput = document.querySelector("#product_image_file_name");
		if (fileInput.files[0]!==undefined) {
			console.log("fileInput: " + fileInput);
			console.log("fileInput.files[0]: " + fileInput.files[0]);
			console.log("fileInput.files[0].name: " + fileInput.files[0].name);
			formData.append("files", fileInput.files[0])
			formData.append("product_image_file_name", fileInput.files[0].name)
		}
		
		formData.append("barcode_number", this.state.barcode_number);
		formData.append("product_name", this.state.product_name);
		formData.append("product_description", this.state.product_description);
		formData.append("manufacturer_name", this.state.manufacturer_name);
		formData.append("unit_of_measure", this.state.unit_of_measure);
		formData.append("measure", this.state.measure);
		formData.append("store_id", this.state.store_id);
		formData.append("selling_prize", this.state.selling_prize);
		formData.append("list_prize", this.state.list_prize);
		formData.append("department_id", this.state.department_id);
		formData.append("product_insert_datetime", this.state.product_insert_datetime.replace("T", " "));
		if (this.state.meal_id!==undefined) formData.append("meal_id", this.state.meal_id);
		if (this.state.meal_category_id!==undefined) formData.append("meal_category_id", this.state.meal_category_id);
		if (this.state.meal_sub_category_id!==undefined) formData.append("meal_sub_category_id", this.state.meal_sub_category_id);
	    Commons.executeFetch (Constants.FULL_PRODUCTS_API, 'POST', this.callbackOkFunction, this.callbackKoFunction, formData);
	    
		
	}
	
	callbackKoFunction = () => {
		console.log ("INSERIMENTO KO") ;
	}

	callbackOkFunction = () => {
		console.log ("INSERIMENTO OK") ;
	}
	
    handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		console.log("ProductInsertForm.handleInputChange - name: " + name + " - value: " + value);
		//this.props.handleInputChange(event);
		this.setState({
		  [name]: value,    });
	}
    
	onChangeProductImage = (event) => {
        console.log("ProductInsertForm.onChangeProductImage -");
		var file = this.refs.file.files[0];
		var reader = new FileReader();
		var url = reader.readAsDataURL(file);

		reader.onloadend = function (e) {
			this.setState({
				imgPreviewSrc: [reader.result]
			})
			}.bind(this);
		console.log(url);
	}

    goBack = (event) => {
    	event.preventDefault();
        this.props.history.goBack();
    }
	
	render = () => {
		return (
			<div className="panel-container">
			    {/* {this.renderRedirect()} */}
			    <div className="panel">
			        <div className="panel-heading">
			           Inserimento nuovo prodotto
			        </div>
			        <div className="panel-body">
			            <form onSubmit={this.handleSubmit} >
				            <BarcodeDiv 
							    onChange={this.handleInputChange} 
								value={this.state.barcode_number} 
								barcode_number_state_property_id={"barcode_number"}
								initializeProductFunction={this.initializeProductStateProperties}
							/>
							<div className="productDetails">
								<div>
									<div>
										<label >Etichetta/Nome prodotto</label>
									</div>
									<div>
										<input type="text" name="product_name" value={this.state.product_name} placeholder="nome prodotto" onChange={this.handleInputChange} />
									</div>
								</div>
								<div>
									<div>
										<label>Descrizione prodotto</label>
									</div>
									<div>
										<input type="text" name="product_description" value={this.state.product_description} placeholder="descrizione prodotto" onChange={this.handleInputChange} />
									</div>
								</div>
								<div>
									<div>
										<label>Denominazione produttore</label>
									</div>
									<div>
										<input type="text" name="manufacturer_name" value={this.state.manufacturer_name} placeholder="denominazione produttore" onChange={this.handleInputChange} />
									</div>
								</div>
								<div>
									<div>
										<label>Unità di misura della quantità</label>
									</div>
									<div>
										<LowPriceDefaultSelect 
												state_element_name={"unit_of_measure"}
												onChange={this.handleInputChange} 
												apiUrl={Constants.UNITS_OF_MEASURE_API}
												initialSelectListObject={[{id: 0, label: "Seleziona un'unità di misura"}]}
												value={this.state.unit_of_measure}
												extractListFromData={
													(data) => data['_embedded']['unitOfMeasures']	
												}
												extractLabelFromItem={
													(item) => (item.unit_of_measure_label + (item.description!=null?(" - ("+item.description+")"):"")) 
												}
												extractIdFromItem={
													(item) => (item.id)
												}							
												/>
									</div>
								</div>
								<div>
									<div>
										<label>Quantità(peso, confezioni, misura)</label>
									</div>
									<div>
										<input type="number" name="measure" value={this.state.measure} placeholder="quantità" onChange={this.handleInputChange} />
									</div>
										</div>
								
								<div>
							</div>
						<div>
							<div>
								<label>Categoria di prodotto</label>
							</div>
							<div>
							<LowPriceDefaultSelect 
								state_element_name={"department_id"}
								onChange={this.handleInputChange} 
								apiUrl={Constants.DEPARTMENTS_API}
								value={this.state.department_id}
								initialSelectListObject={[{id: 0, label: "Seleziona settore merceologico del prodotto"}]}
								extractListFromData={
									(data) => data['_embedded']['departments']	
								}
								extractLabelFromItem={
									(item) => (item.label + " - " + item.description)
								}
								extractIdFromItem={
									(item) => (item.id)
								}								  
								/>
							</div>
						</div>
						<div>
							<div>
								<label>Pasto</label>
							</div>
							<div>
							<LowPriceDefaultSelect 
								state_element_name={"meal_id"}
								onChange={this.handleInputChange} 
								apiUrl={Constants.MEALS_API}
								value={this.state.meal_id}
								initialSelectListObject={[{id: 0, label: "Seleziona pasto"}]}
								extractListFromData={
									(data) => data['_embedded']['meals']	
								}
								extractLabelFromItem={
									(item) => (item.label + " - " + item.description)
								}
								extractIdFromItem={
									(item) => (item.id)
								}								  
								/>
							</div>
						</div>
						<div>
							<div>
								<label>Tipologia di prodotto in ambito pasti</label>
							</div>
							<div>
							<LowPriceDefaultSelect 
								state_element_name={"meal_category_id"}
								onChange={this.handleInputChange} 
								apiUrl={Constants.MEAL_CATEGORIES_API}
								value={this.state.meal_category_id}
								initialSelectListObject={[{id: 0, label: "Seleziona tipologia di prodotto in ambito pasti"}]}
								extractListFromData={
									(data) => data['_embedded']['mealCategories']	
								}
								extractLabelFromItem={
									(item) => (item.label)
								}
								extractIdFromItem={
									(item) => (item.id)
								}									  
								/>
							</div>
						</div>
						<div>
							<div>
								<label>Sottocategoria di prodotto</label>
							</div>
							<div>
								<LowPriceDefaultSelect 
								state_element_name={"meal_sub_category_id"}
								onChange={this.handleInputChange} 
								apiUrl={Constants.MEAL_SUB_CATEGORIES_API}
								value={this.state.meal_sub_category_id}
								initialSelectListObject={[{id: 0, label: "Seleziona sotto tipologia di prodotto in ambito pasti"}]}
								extractListFromData={
									(data) => data['_embedded']['mealSubCategories']	
								}
								extractLabelFromItem={
									(item) => (item.label)
								}
								extractIdFromItem={
									(item) => (item.id)
								}	
								/>
							</div>
						</div>
						<div>
							<div>
								<label>Immagine del prodotto(.png,.jpeg,.gif,.jpg)</label>
							</div>
							<div className="col-50">
								<input type="file" id="product_image_file_name" ref="file" onChange={this.onChangeProductImage} accept=".png,.jpeg,.gif,.jpg" />
							</div>
							<div>
								<img src={this.state.imgPreviewSrc} />
							</div>
						</div>
					</div>
                    
					<div>
					    <div>
                            <label>Punto vendita</label>
                        </div>
                        <div>
						  <LowPriceDefaultSelect 
							state_element_name={"store_id"}
							onChange={this.handleInputChange} 
							apiUrl={Constants.FULL_STORES_API}
							initialSelectListObject={
								[{id: 0, label: "Seleziona un punto vendita"},
							    {id: -1, label: "Censisci un nuovo punto vendita"}]
							}
							value={this.state.store_id}
							extractListFromData={
								(data) => data	
							}
							extractLabelFromItem={
								(item) => (item.brand_name + " - " + item.store_city)
							}
							extractIdFromItem={
								(item) => (item.store_id)
							}
															
							/>
						</div>
					</div>
					<div>
                        <div>
                            <label>Prezzo di vendita</label>
                        </div>
                        <div>
                            <input type="number" min="0.00" max="10000.00" step="0.01" value={this.state.selling_prize}  name="selling_prize" placeholder="prezzo di vendità" onChange={this.handleInputChange} />
                        </div>
				    </div>
                    <div>
                        <div>
                            <label>Prezzo di listino</label>
                        </div>
                        <div>
                            <input type="number" min="0.00" max="10000.00" step="0.01" name="list_prize" value={this.state.list_prize} placeholder="prezzo di listino" onChange={this.handleInputChange} />
                        </div>
				            </div>
				            
                    
					<div>
                        <div>
                            <label>Momento in cui hai acquistato/censito il prezzo</label>
                        </div>
                        <div>
                            <input type="datetime-local" name="product_insert_datetime" 
							defaultValue={this.state.product_insert_datetime} 
							// value={this.state.product_insert_datetime}
							onChange={this.handleInputChange} />
                        </div>
					</div>
				            <div className="row insert-form-buttons">
				                <Button type="submit" variant="secondary">INSERISCI</Button>
				                &nbsp;&nbsp;&nbsp;&nbsp;
				                <Button variant="warning" onClick={this.goBack}>Annulla</Button>
				            </div>
			            </form>
		            </div>
	            </div>
	        </div>
		);
	}
    
}