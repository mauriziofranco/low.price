package com.price.low.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.price.low.entity.PrizeRegistry;

/**
 * Provides a repository for the v entity
 * 
 * Provides data for PrizeRegistry info
 * 
 * @author maurizio.franco@ymail.com
 */
public interface PrizeRegistryRepository extends JpaRepository<PrizeRegistry, Long> {

}
