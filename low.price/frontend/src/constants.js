
import * as Environment from './env.js';

//export const BACKEND_API_PREFIX = "http://" + Environment.HOST + ":" + Environment.PORT + Environment.APPLICATION_CONTEXT ;
export const BACKEND_API_PREFIX = "" ;

export const UNITS_OF_MEASURE_API     = BACKEND_API_PREFIX + '/api/unitOfMeasures'    ;
export const DEPARTMENTS_API     = BACKEND_API_PREFIX + '/api/departments'    ;
export const MEALS_API     = BACKEND_API_PREFIX + '/api/meals'    ;
export const MEAL_CATEGORIES_API     = BACKEND_API_PREFIX + '/api/mealCategories'    ;
export const MEAL_SUB_CATEGORIES_API = BACKEND_API_PREFIX + '/api/mealSubCategories' ;
export const PRODUCTS_API = BACKEND_API_PREFIX + '/api/products' ;

export const FULL_PRODUCTS_API = BACKEND_API_PREFIX + '/api/v1/products/' ;
export const FULL_STORES_API = BACKEND_API_PREFIX + '/api/v1/stores/' ;
export const CUSTOM_BARCODE_API = BACKEND_API_PREFIX + '/api/v1/barcode/' ;

