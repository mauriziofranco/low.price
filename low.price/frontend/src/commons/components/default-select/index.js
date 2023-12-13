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
			itemsListForSelect: this.props.initialSelectListObject,
			extractListFromData: this.props.extractListFromData,
			extractLabelFromItem: this.props.extractLabelFromItem,
			extractIdFromItem: this.props.extractIdFromItem,
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
										this.updateListForSelect,
										this.state.extractIdFromItem
									  );
  }

updateListForSelect = (list) => {
    this.setState({itemsListForSelect: list});
}

	render () {
		return (
			// <select name={this.state.state_element_name} defaultValue={this.state.selectedItemId} onChange={this.props.onChange}>
			<select name={this.state.state_element_name} value={this.props.value}  onChange={this.props.onChange}>
				{/* <select name={this.state.state_element_name} defaultValue={this.state.itemsListForSelect.filter(element => element.id===this.state.value)[0]} onChange={this.props.onChange}></select> */}
			{this.state.itemsListForSelect.map((e, key) => {
				// return <option key={key} value={e.id} selected={e.id===this.state.value}>{e.label}</option>;
				return <option key={key} value={e.id} >{e.label}</option>;
			})}
			</select>
		);
	}
}