import React, {Component} from 'react';

import * as Commons from '../../../../../commons.js';
import * as Constants from '../../../../../constants.js';


export default class BarcodeDiv extends Component {
	
	componentDidMount() {			
        // this.fetchItemsFromApi();
      }
	
	constructor (props) {
		super(props);
		this.state = {
            barcode_number_state_property_id: this.props.barcode_number_state_property_id,
            [this.props.barcode_number_state_property_id]: this.props.value,
		// // this.handleInputChange = this.handleInputChange.bind(this);
		//     state_element_name: this.props.state_element_name,
		// 	apiUrl: this.props.apiUrl,
		// 	// itemsFromApi: [],
		// 	itemsListForSelect: [
		// 		this.props.initialSelectListObject
		//     ],
		// 	extractListFromData: this.props.extractListFromData,
		// 	extractLabelFromItem: this.props.extractLabelFromItem,
            initializeProductFunction: this.props.initializeProductFunction
		// 	selectedItemId: 0,
		}
	}
	
	checkForBarcode = (event) =>{
        console.log("checkForBarcode START");
        const uri = Constants.CUSTOM_BARCODE_API + this.state[this.state.barcode_number_state_property_id] ;
        console.log("checkForBarcode - DEBUG - uri: ", uri);
        Commons.executeFetchWithHeader(uri, 
            "GET", 
            null, 
            this.successBarcodeFunction, 
            Commons.operationError
            );
            event.preventDefault();
    }

    successBarcodeFunction = (data) => {
        console.log("successBarcodeFunction START with data: ", data);
        this.state.initializeProductFunction(data);

    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("BarcodeDiv.handleInputChange - name: " + name + " - value: " + value);
        // //this.props.handleInputChange(event);
        this.setState({
        [name]: value,    });
        this.props.onChange(event);
    }

	
    render () {
        return (
            <div>
                <label>Codice a barre</label> <input type="number" name={this.state.barcode_number_state_property_id} value={this.props.value} placeholder="codice a barre" onChange={this.handleInputChange} />
                &nbsp;
                <button onClick={this.checkForBarcode}>cerca</button>
            </div>
        );
    }
}