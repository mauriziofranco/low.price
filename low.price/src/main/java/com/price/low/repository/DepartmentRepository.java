package com.price.low.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.price.low.entity.Department;

/**
 * Provides a repository for the DepartmentRecord entity
 * 
 * Provides data for department info
 * 
 * @author maurizio.franco@ymail.com
 */
public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
