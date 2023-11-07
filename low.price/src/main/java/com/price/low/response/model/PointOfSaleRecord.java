/**
 * 
 */
package com.price.low.response.model;

import java.sql.Timestamp;

/**
 * Provides data for point of sale full info to list into frontend
 * 
 * @author maurizio.franco@ymail.com
 */
public record PointOfSaleRecord(
		Long point_of_sale_id,
		Long brand_id,
	    String point_of_sale_full_business_name,
	    String point_of_sale_city,
	    String point_of_sale_address,
	    String point_of_sale_province,
	    Timestamp point_of_sale_insert_datetime,
	    String brand_name,
	    String brand_full_business_name
		) {

}
