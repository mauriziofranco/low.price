/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    callProductsListRestApi();
    
}

function callProductsListRestApi () {
    //
    $.ajax({
        url: "http://localhost:8080/api/v1/products/"
    }).then(function(data) {
       //$('.greeting-id').append(data.id);
       //$('.greeting-content').append(data.content);
       console.log(data);
       
       document.getElementById('products').innerHTML = generateProductsList (data) ;
    });
}

function generateProductsList (products) {
    console.log("generateProductsList - START - building products from: " + products)
    var table = "<table>" ;
    products.forEach(
        item => table = table + generateTableRow(item)
    );
    table = table + "</table>" ;
    console.log("generateProductsList - END - built products table: " + table)
    return table ;
}

function generateTableRow (product) {
    var row = "<tr>" ;
    row = row + "<td><img src='" + "http://localhost:3000/images/products/" + product.image_file_name + "' /></td>" ;
    row = row + "<td>" + "http://localhost:3000/images/brand/" + product.logo_image_file_name + "</td>" ;
    row = row + "<td>" + product.product_name + "</td>" ;
    //var mediumPrice = (product.unit_of_measure===2)?(" - €"+((product.list_prize*1000/product.measure).toFixed(2))+"/kg"):"") ;
    var mediumPrice = (true) ? product.list_prize :""  ;
    row = row + "<td>" + mediumPrice + "</td>" ;
    row = row + "</tr>" ;
    return row ;
}