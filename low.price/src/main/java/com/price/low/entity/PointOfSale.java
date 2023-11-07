/**
 * 
 */
package com.price.low.entity;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * @author maurizio.franco@ymail.com
 */
@Entity
@Table(name = "point_of_sale")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class PointOfSale {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long point_of_sale_id;
	private Long brand_id;
    private String point_of_sale_full_business_name;
    private String point_of_sale_city;
    private String point_of_sale_address;
    private String point_of_sale_province;
    private Timestamp point_of_sale_insert_datetime;
}
