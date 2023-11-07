import React, {Component} from 'react';

import * as Commons from '../../../commons.js';

export default class LowPriceDefaultSelect extends Component {
	
	componentDidMount() {			
        this.fetchItemsFromApi();
      }
	
	constructor (props) {
		super(props);
		// this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
		    state_element_name: this.props.state_element_name,
			apiUrl: this.props.apiUrl,
			// itemsFromApi: [],
			itemsListForSelect: [
				this.props.initialSelectListObject
		    ],
			extractListFromData: this.props.extractListFromData,
			extractLabelFromItem: this.props.extractLabelFromItem,
			selectedItemId: 0,
		}
	}
	
	fetchItemsFromApi = () =>{
        Commons.executeFetchWithHeader(this.state.apiUrl, 
										"GET", 
										null, 
										Commons.fetchItemsFromApiSuccess, 
										Commons.operationError, 
										null, 
										this.state.extractListFromData, 
										this.state.extractLabelFromItem, 
										this.state.itemsListForSelect, 
										this.updateListForSelect
									  );
  }

//   fetchItemsFromApiSuccess = (data, extractListFunction, extractLabelFromItem, updateListForSelect) => {
//     console.log("fetchItemsFromApiSuccess - START");
// 	let itemsFromApi = extractListFunction(data)
//     // this.setState({ itemsFromApi: itemsFromApi });
// 	let itemsListForSelect = [...this.state.itemsListForSelect].concat(
// 	itemsFromApi.map(
// 		(item) => ({
// 		id: item.id, 
// 		label:  extractLabelFromItem(item)
// 		})
// 	)
// 	);
// 	updateListForSelect(itemsListForSelect)
//     console.log(data);
//     console.log("fetchItemsFromApiSuccess - END");
// }

updateListForSelect = (list) => {
    this.setState({itemsListForSelect: list});
}

// handleInputChange(event) {
// 	const target = event.target;
// 	const value = target.value;
// 	const name = target.name;
//     console.log("ProductCategoriesSelect.handleInputChange - name: " + name + " - value: " + value);
// 	this.props.onChange(event);
// 	// this.setState({
// 	//   [name]: value,    });
// }
	
	render () {
		return (
			<select name={this.state.state_element_name} defaultValue={this.state.selectedItemId} onChange={this.props.onChange}>
			{this.state.itemsListForSelect.map((e, key) => {
				return <option key={key} value={e.id}>{e.label}</option>;
			})}
			</select>
		);
	}
}