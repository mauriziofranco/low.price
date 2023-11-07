package com.price.low.repository.custom;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.price.low.response.model.PointOfSaleRecord;
/**
 * ProductRecordRepository
 * 
 * @author maurizio.franco@ymail.com
 *
 */
@Repository
public interface PointOfSaleRecordRepository {
	
	List<PointOfSaleRecord> findAllPointsOfSale();
	
}
