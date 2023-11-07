package com.price.low.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.price.low.entity.PointOfSale;

/**
 * Provides a repository for the PointOfSale entity
 * 
 * Provides data for PointOfSale info
 * 
 * @author maurizio.franco@ymail.com
 */
public interface PointOfSaleRepository extends JpaRepository<PointOfSale, Long> {

}
