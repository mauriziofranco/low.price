package com.price.low.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.price.low.entity.MealCategory;

/**
 * Provides a repository for the MealCategory entity
 * 
 * Provides data for MealCategory info
 * 
 * @author maurizio.franco@ymail.com
 */
public interface MealCategoryRepository extends JpaRepository<MealCategory, Long> {

}
