// import { trackPromise } from 'react-promise-tracker';

export function executeFetch(uri, method, successCallbackFunction, callbackFunctionKO, body, isBodyAJSON) {
	console.log("Commons.executeFetch - START - uri: " + uri);
	//let token = sessionStorage.getItem('headerToken');
	//let headerToken = getAuthorizationHeaderFromToken(token, isBodyAJSON);
	let headerToken = null ;
	executeFetchWithHeader(uri, method, headerToken, successCallbackFunction, callbackFunctionKO, body)

}

export function executeFetchWithHeader(uri, method, headerToken, successCallbackFunction, callbackFunctionKO, 
	body, extractListFunction, extractLabelFromItem, initialListForSelect, updateListForSelectFunctionCallback, extractIdFromItem) {
	// console.log("Commons.executeFetchWithHeader - START - uri: " + uri);
	// console.log(`Commons.executeFetchWithHeader - DEBUG - body: ${body}`);
	// console.log(body);
	// console.log(`Commons.executeFetchWithHeader - DEBUG - method: ${method}  - uri: ${uri}`);
	fetch(uri, {
		method: method,
		body: body
		,

		// headers: headerToken
	})
		//   .then((response) => {
		//     console.log(response);
		//   })
		.then(
			(response) => (
				response.json().then(data => ({ status: response.status, body: data }))
				
			))
		.then((data) => {
			// console.log("Commons.executeFetchWithHeader - DEBUG - data: " + data);
			console.log(data);
			// console.log(data.body);
			// console.log("aaa");
			// console.log(data.body._embedded['unitOfMeasures']);
			if (method === 'DELETE' && data.status === 204) {
				successCallbackFunction(data.body);
			} else if (data.status === 200 || data.status === 201) {
				successCallbackFunction(data.body, extractListFunction, extractLabelFromItem, initialListForSelect, updateListForSelectFunctionCallback, extractIdFromItem);
			} else {
				callbackFunctionKO(data.body);
			}
		})
}

export function fetchItemsFromApiSuccess (data, extractListFunction, extractLabelFromItem, initialListForSelect, updateListForSelect, extractIdFromItem) {
    // console.log("fetchItemsFromApiSuccess - START");
	let itemsFromApi = extractListFunction(data)
    // this.setState({ itemsFromApi: itemsFromApi });
	let itemsListForSelect = [...initialListForSelect].concat(
	itemsFromApi.map(
		(item) => ({
		id: extractIdFromItem(item), 
		label:  extractLabelFromItem(item)
		})
	)
	);
	updateListForSelect(itemsListForSelect)
    // console.log(data);
    // console.log("fetchItemsFromApiSuccess - END");
}

export function operationError(err, errorMessage) {
	console.log("OPERATION KO");	
	// let errorMsg = (err !== null && err !== undefined && err.errorMessage !== undefined) ? err.errorMessage : "Errore Generico...";
	// toast.error(errorMessage===undefined?errorMsg:errorMessage, {
	// 	position: toast.POSITION.BOTTOM_LEFT
	// });
	console.warn(err)
}

// export function fetchItemsFromApiSuccess (data) {
//     console.log("Commons.fetchItemsFromApiSuccess - START");
//     this.setState({ itemsFromApi: data });
//       let itemsListForSelect = [...this.state.itemsListForSelect].concat(
//         data.map(
//           (item) => ({
//             id: item.id, 
//             label:  item.brand_name + " - " + item.store_city

//           })
//         )
//       );
//       this.setState({itemsListForSelect: itemsListForSelect});
//     console.log(data);
//     console.log("Commons.fetchItemsFromApiSuccess - END");
//     this.setState({ itemsListForSelect: itemsListForSelect });
// }