import React, {Component} from 'react';

import * as Commons from '../../commons.js';
import * as Constants from '../../constants.js';

import { Button } from 'react-bootstrap';
import LowPriceDefaultSelect from '../../commons/components/default-select/index.js';

export default class ProductInsertForm extends Component {
	
	componentDidMount() {			
		// this.fetchUnitsOfMeasure();
        this.fetchStores();
		this.initializeInsertDateTime();
		// this.fetchCourseCodes.bind(this);
		// this.fetchCourseCodes();
		
      }
	
	constructor (props) {
		super(props);
		// this.goBack = this.goBack.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		this.state = {
            product_name: 'aaa',

        // unitsOfMeasureFromApi: [],
        // unitsOfMeasureListForSelect: [{
        //   id: 0,
        //   label:
        //     "Seleziona un'unità di misura",
        // }],
        // selectedUnitOfMeasureId: 0,
        storesFromApi: [],
        storesListForSelect: [{
          id: 0,
          label:
            "Seleziona un punto vendita",
        }],
        selectedStoreId: 0,
		}
		
		// this.loggedUserId = Commons.getUserLoggedId() ;
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

  fetchStores = () =>{
    Commons.executeFetchWithHeader(Constants.FULL_STORES_API, "GET", null, this.fetchStoresSuccess, Commons.operationError, null);
  }
  

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

  fetchStoresSuccess = (data) => {
    // console.log("fetchStoresSuccess - START");
    this.setState({ storesFromApi: data });
      let storesListForSelect = [...this.state.storesListForSelect].concat(
        data.map(
          (item) => ({
            id: item.store_id, 
            label:  item.brand_name + " - " + item.store_city

          })
        )
      );

	  console.log("storesListForSelect: ", storesListForSelect);
      this.setState({storesListForSelect: storesListForSelect});
    // console.log(data);
    // console.log(data);
    // console.log("fetchStoresSuccess - END");
    this.setState({ storesListForSelect: storesListForSelect });
}
	
	// setCourseCodes = (responseData) => {
	// 	this.setState({ courseCodes: responseData });
	// }
	  
	  handleSubmit(event) {
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
	
    handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		console.log("ProductInsertForm.handleInputChange - name: " + name + " - value: " + value);
		//this.props.handleInputChange(event);
		this.setState({
		  [name]: value,    });
	}
    
    goBack(event){
    	event.preventDefault();
        this.props.history.goBack();
    }
	
	render () {
		return (
			<div className="panel-container">
			    {/* {this.renderRedirect()} */}
			    <div className="panel">
			        <div className="panel-heading">
			           Inserimento nuovo prodotto
			        </div>
			        <div className="panel-body">
			            <form onSubmit={this.handleSubmit}>
				            <div className="row">
                        <div className="col-25">
                            <label>Codice a barre</label>
                        </div>
                        <div className="col-75">
                            <input type="number" className="candidate-input-form" name="barcode_number" placeholder="codice a barre" onChange={this.handleInputChange} />
                        </div>
				            </div>
				            <div className="row">
				                <div className="col-25">
				                    <label >Etichetta/Nome prodotto</label>
				                </div>
				                <div className="col-75">
				                    <input type="text" className="candidate-input-form" name="product_name" value={this.state.product_name} placeholder="nome prodotto" onChange={this.handleInputChange} />
				                </div>
				            </div>
				            <div className="row">
				                <div className="col-25">
				                    <label>Descrizione prodotto</label>
				                </div>
				                <div className="col-75">
				                    <input type="text" className="candidate-input-form" name="product_description" placeholder="descrizione prodotto" onChange={this.handleInputChange} />
				                </div>
				            </div>
                    <div className="row">
				                <div className="col-25">
				                    <label>Denominazione produttore</label>
				                </div>
				                <div className="col-75">
				                    <input type="text" className="candidate-input-form" name="manufacturer_name" placeholder="denominazione produttore" onChange={this.handleInputChange} />
				                </div>
				            </div>
				            <div className="row">
				                <div className="col-25">
				                    <label>Unità di misura della quantità</label>
				              </div>
				              <div className="col-75">
					              {/* <select name="unit_of_measure" className="candidate-input-form" defaultValue={this.state.selectedUnitOfMeasureId} onChange={this.handleInputChange} >
							        {this.state.unitsOfMeasureListForSelect.map((e, key) => {
							        	return <option key={key} value={e.id}>{e.label}</option>;
							        })}
						          </select> */}
								  <LowPriceDefaultSelect 
										state_element_name={"unit_of_measure"}
										onChange={this.handleInputChange} 
										apiUrl={Constants.UNITS_OF_MEASURE_API}
										initialSelectListObject={{id: 0, label: "Seleziona un'unità di misura"}}
										extractListFromData={
											(data) => data['_embedded']['unitOfMeasures']	
										}
										extractLabelFromItem={
											(item) => (item.unit_of_measure_label + (item.description!=null?(" - ("+item.description+")"):"")) 
										}
																		
										/>
				              </div>
				            </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Quantità(peso, confezioni, misura)</label>
                        </div>
                        <div className="col-75">
                            <input type="number" className="candidate-input-form" name="measure" placeholder="quantità" onChange={this.handleInputChange} />
                        </div>
				            </div>
                    
                    <div className="row">
                        <div className="col-25">
                            <label>Punto vendita</label>
                        </div>
                        <div className="col-75">
                          <select name="store_id" className="candidate-input-form" defaultValue={this.state.selectedStoreId} onChange={this.handleInputChange} >
                            {this.state.storesListForSelect.map((e, key) => {
                              return <option key={key} value={e.id}>{e.label}</option>;
                            })}
                          </select>
				                </div>
				            </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Prezzo a cui il prodotto è in vendita(al momento dell'acquisto)</label>
                        </div>
                        <div className="col-75">
                            <input type="number" min="0.00" max="10000.00" step="0.01" className="candidate-input-form" name="selling_prize" placeholder="prezzo di vendità" onChange={this.handleInputChange} />
                        </div>
				            </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Prezzo di listino</label>
                        </div>
                        <div className="col-75">
                            <input type="number" min="0.00" max="10000.00" step="0.01" className="candidate-input-form" name="list_prize" placeholder="prezzo di listino" onChange={this.handleInputChange} />
                        </div>
				            </div>
				            <div className="row">
				                <div className="col-25">
				                    <label>Immagine del prodotto(.png,.jpeg,.gif,.jpg)</label>
				                </div>
				                <div className="col-75">
				                    <input type="file" id="product_image_file_name" accept=".png,.jpeg,.gif,.jpg" />
				                </div>
				            </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Categoria di prodotto</label>
                        </div>
                        <div className="col-75">
                          <LowPriceDefaultSelect 
						      state_element_name={"department_id"}
							  onChange={this.handleInputChange} 
							  apiUrl={Constants.DEPARTMENTS_API}
							  initialSelectListObject={{id: 0, label: "Seleziona settore merceologico del prodotto"}}
							  extractListFromData={
								(data) => data['_embedded']['departments']	
							  }
							  extractLabelFromItem={
								(item) => (item.label + " - " + item.description)
							  }
															  
							/>
				        </div>
				    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Pasto</label>
                        </div>
                        <div className="col-75">
                          <LowPriceDefaultSelect 
						      state_element_name={"meal_id"}
							  onChange={this.handleInputChange} 
							  apiUrl={Constants.MEALS_API}
							  initialSelectListObject={{id: 0, label: "Seleziona pasto"}}
							  extractListFromData={
								(data) => data['_embedded']['meals']	
							  }
							  extractLabelFromItem={
								(item) => (item.label + " - " + item.description)
							  }
															  
							/>
				        </div>
					</div>
					<div className="row">
                        <div className="col-25">
                            <label>Tipologia di prodotto in ambito pasti</label>
                        </div>
                        <div className="col-75">
                          <LowPriceDefaultSelect 
						      state_element_name={"meal_category_id"}
							  onChange={this.handleInputChange} 
							  apiUrl={Constants.MEAL_CATEGORIES_API}
							  initialSelectListObject={{id: 0, label: "Seleziona tipologia di prodotto in ambito pasti"}}
							  extractListFromData={
								(data) => data['_embedded']['mealCategories']	
							  }
							  extractLabelFromItem={
								(item) => (item.label)
							  }
															  
							/>
				        </div>
					</div>
                    <div className="row">
                        <div className="col-25">
                            <label>Sottocategoria di prodotto</label>
                        </div>
                        <div className="col-75">
						    <LowPriceDefaultSelect 
						      state_element_name={"meal_sub_category_id"}
							  onChange={this.handleInputChange} 
							  apiUrl={Constants.MEAL_SUB_CATEGORIES_API}
							  initialSelectListObject={{id: 0, label: "Seleziona sotto tipologia di prodotto in ambito pasti"}}
							  extractListFromData={
								(data) => data['_embedded']['mealSubCategories']	
							  }
							  extractLabelFromItem={
								(item) => (item.label)
							  }
							/>
						</div>
					</div>
					<div className="row">
                        <div className="col-25">
                            <label>Momento in cui hai acquistato/censito il prezzo</label>
                        </div>
                        <div className="col-75">
                            <input type="datetime-local" name="product_insert_datetime" 
							defaultValue={this.state.product_insert_datetime} 
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