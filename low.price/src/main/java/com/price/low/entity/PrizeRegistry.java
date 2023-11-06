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
 * 
 */
@Entity
@Table(name = "prize_registry")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class PrizeRegistry {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	private long product_id;
    private Double prize;
    private Timestamp insert_datetime;
    private Long point_of_sale_id;
}
