package com.price.low.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.price.low.entity.UnitOfMeasure;

/**
 * Provides a repository for the unit_of_measure entity
 * 
 * Provides data for unit_of_measure info
 * 
 * @author maurizio.franco@ymail.com
 */
public interface UnitOfMeasureRepository extends JpaRepository<UnitOfMeasure, Long> {

}
