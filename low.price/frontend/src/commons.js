// import { trackPromise } from 'react-promise-tracker';

export function executeFetchWithHeader(uri, method, headerToken, successCallbackFunction, callbackFunctionKO, body) {
	console.log("Commons.executeFetchWithHeader - START - uri: " + uri);
	console.log(`Commons.executeFetchWithHeader - DEBUG - body: ${body}`);
	console.log(body);
	console.log(`Commons.executeFetchWithHeader - DEBUG - method: ${method}  - uri: ${uri}`);
	// trackPromise(
		fetch(uri, {
			method: method,
			body: body
            ,

			// headers: headerToken
		})
			//   .then((response) => {
            //     console.log(response);
            //   }
			.then(
				response => response.json().then(data => ({ status: response.status, body: data }))
			)
			.then((data) => {
				console.log("Commons.executeFetchWithHeader - DEBUG - data: " + data);
				// console.log(data);
                // console.log("aaa");
                // console.log(data.body._embedded['unitOfMeasures']);
				if (method === 'DELETE' && data.status === 204) {
					successCallbackFunction(data.body);
				} else if (data.status === 200 || data.status === 201) {
					successCallbackFunction(data.body);
				} else {//ERROR
					callbackFunctionKO(data.body);
				}
			})
	// );
}

export function operationError(err, errorMessage) {
	console.log("OPERATION KO");	
	// let errorMsg = (err !== null && err !== undefined && err.errorMessage !== undefined) ? err.errorMessage : "Errore Generico...";
	// toast.error(errorMessage===undefined?errorMsg:errorMessage, {
	// 	position: toast.POSITION.BOTTOM_LEFT
	// });
	console.warn(err)
}