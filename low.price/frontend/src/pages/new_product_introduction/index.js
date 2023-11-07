import React, {Component} from 'react';

import * as Commons from '../../commons.js';
import * as Constants from '../../constants.js';

import { Button } from 'react-bootstrap';
import LowPriceDefaultSelect from '../../commons/components/default-select/index.js';

export default class ProductInsertForm extends Component {
	
	componentDidMount() {			
		this.fetchUnitsOfMeasure();
    this.fetchStores();
		// this.fetchCourseCodes.bind(this);
		// this.fetchCourseCodes();
		
      }
	
	constructor (props) {
		super(props);
		// this.goBack = this.goBack.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
		
		this.state = {
        unitsOfMeasureFromApi: [],
        unitsOfMeasureListForSelect: [{
          id: 0,
          label:
            "Seleziona un'unità di misura",
        }],
        selectedUnitOfMeasureId: 0,
        storesFromApi: [],
        storesListForSelect: [{
          id: 0,
          label:
            "Seleziona un punto vendita",
        }],
        selectedStoreId: 0,

				courseCodes : [],
				selectedPositionCode: '',
				
				firstname : '',
				lastname : '',
				positionCode : '',
				email: '',
				
				redirect: false
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

  fetchUnitsOfMeasure = () =>{
    //Commons.executeFetchWithHeader(Constants.UNITS_OF_MEASURE_API, "GET", { 'Content-Type': 'application/json' }, this.insertSuccess, Commons.operationError, JSON.stringify(item));
    Commons.executeFetchWithHeader(Constants.UNITS_OF_MEASURE_API, "GET", null, this.fetchUnitsOfMeasureSuccess, Commons.operationError, null);
  }

  fetchStores = () =>{
    Commons.executeFetchWithHeader(Constants.FULL_STORES_API, "GET", null, this.fetchStoresSuccess, Commons.operationError, null);
  }
  

  fetchUnitsOfMeasureSuccess = (data) => {
      // console.log("fetchUnitsOfMeasureSuccess - START");
      // console.log(data);
      // console.log(data._embedded.unitOfMeasures);
      // console.log("fetchUnitsOfMeasureSuccess - END");
      this.setState({ unitsOfMeasureFromApi: data._embedded.unitOfMeasures });
      let unitsOfMeasureListForSelect = [...this.state.unitsOfMeasureListForSelect].concat(
        data._embedded.unitOfMeasures.map(
          (item) => ({
            id: item.id, 
            label: (item.unit_of_measure_label + (item.description!=null?(" - ("+item.description+")"):"")) 
          })
        )
      );
      this.setState({unitsOfMeasureListForSelect: unitsOfMeasureListForSelect});
      
  }

  fetchStoresSuccess = (data) => {
    // console.log("fetchStoresSuccess - START");
    this.setState({ storesFromApi: data });
      let storesListForSelect = [...this.state.storesListForSelect].concat(
        data.map(
          (item) => ({
            id: item.id, 
            label:  item.brand_name + " - " + item.store_city

          })
        )
      );
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
	    // this.sendInsertRequest();
	  }
	
	// sendInsertRequest = () => {
	// 	const formData = new FormData();

	// 	const fileInput = document.querySelector("#imgpath");
	// 	if (fileInput.files[0]!==undefined) {
	// 		console.log("fileInput: " + fileInput);
	// 		console.log("fileInput.files[0]: " + fileInput.files[0]);
	// 		console.log("fileInput.files[0].name: " + fileInput.files[0].name);
	// 		formData.append("files", fileInput.files[0])
	// 		formData.append("imgpath", fileInput.files[0].name)
	// 	}
	// 	const fileInput2 = document.querySelector("#cvpath");
	// 	if (fileInput2.files[0]!==undefined) {
	// 		console.log("fileInput2: " + fileInput2);
	// 		console.log("fileInput2.files[0]: " + fileInput2.files[0]);
	// 		console.log("fileInput2.files[0].name: " + fileInput2.files[0].name);
	// 		formData.append("files", fileInput2.files[0])
	// 		formData.append("cvExternalPath", fileInput2.files[0].name)
	// 	}
		
	//     formData.append("firstname", this.state.firstname);
	//     formData.append("lastname", this.state.lastname);
	//     formData.append("email", this.state.email);
	//     formData.append("userId", this.loggedUserId );
	//     formData.append("insertedBy", this.loggedUserId );
	//     formData.append("courseCode", this.state.positionCode);

	//     Commons.executeFetch (Constants.FULL_CANDIDATE_CUSTOM_API_URI, 'POST', this.redirectToCandidatesList, this.callbackKoFunction, formData);
	    
		
	// }
	
	// callbackKoFunction = () => {
	// 	alert ("INSERIMENTO KO") ;
	// }
	
    handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		console.log("ProductInsertForm.handleInputChange - name: " + name + " - value: " + value);
		//this.props.handleInputChange(event);
		// this.setState({
		//   [name]: value,    });
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
                            <input type="number" className="candidate-input-form" name="barcode_number" placeholder="codice a barre" onChange={this.handleInputChange} required/>
                        </div>
				            </div>
				            <div className="row">
				                <div className="col-25">
				                    <label >Etichetta/Nome prodotto</label>
				                </div>
				                <div className="col-75">
				                    <input type="text" className="candidate-input-form" name="product_name" placeholder="nome prodotto" onChange={this.handleInputChange} required/>
				                </div>
				            </div>
				            <div className="row">
				                <div className="col-25">
				                    <label>Descrizione prodotto</label>
				                </div>
				                <div className="col-75">
				                    <input type="text" className="candidate-input-form" name="description" placeholder="descrizione prodotto" onChange={this.handleInputChange} required/>
				                </div>
				            </div>
                    <div className="row">
				                <div className="col-25">
				                    <label>Denominazione produttore</label>
				                </div>
				                <div className="col-75">
				                    <input type="text" className="candidate-input-form" name="manufacturer_name" placeholder="denominazione produttore" onChange={this.handleInputChange} required/>
				                </div>
				            </div>
				            <div className="row">
				                <div className="col-25">
				                    <label>Unità di misura della quantità</label>
				              </div>
				              <div className="col-75">
					              <select name="unit_of_measure" className="candidate-input-form" defaultValue={this.state.selectedUnitOfMeasureId} onChange={this.handleInputChange} required>
							        {this.state.unitsOfMeasureListForSelect.map((e, key) => {
							        	return <option key={key} value={e.id}>{e.label}</option>;
							        })}
						          </select>
				              </div>
				            </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Quantità(peso, confezioni, misura)</label>
                        </div>
                        <div className="col-75">
                            <input type="number" className="candidate-input-form" name="measure" placeholder="quantità" onChange={this.handleInputChange} required/>
                        </div>
				            </div>
                    
                    <div className="row">
                        <div className="col-25">
                            <label>Punto vendita</label>
                        </div>
                        <div className="col-75">
                          <select name="prize_registry_point_of_sale_id" className="candidate-input-form" defaultValue={this.state.selectedStoreId} onChange={this.handleInputChange} required>
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
                            <input type="number" min="0.00" max="10000.00" step="0.01" className="candidate-input-form" name="prize" placeholder="prezzo di vendità" onChange={this.handleInputChange} required/>
                        </div>
				            </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Prezzo di listino</label>
                        </div>
                        <div className="col-75">
                            <input type="number" className="candidate-input-form" name="list_prize" placeholder="prezzo di listino" onChange={this.handleInputChange} required/>
                        </div>
				            </div>
				            <div className="row">
				                <div className="col-25">
				                    <label>Immagine del prodotto(.png,.jpeg,.gif,.jpg)</label>
				                </div>
				                <div className="col-75">
				                    <input type="file" id="image_file_name" accept=".png,.jpeg,.gif,.jpg" />
				                </div>
				            </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Categoria di prodotto</label>
                        </div>
                        <div className="col-75">
                          <LowPriceDefaultSelect 
						      state_element_name={"department_selected_id"}
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
						      state_element_name={"meal_selected_id"}
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
						      state_element_name={"meal_category_selected_id"}
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
						      state_element_name={"meal_sub_category_selected_id"}
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