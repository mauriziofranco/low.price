package com.price.low.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.price.low.repository.PointOfSaleRepository;
import com.price.low.repository.custom.PointOfSaleRecordRepository;
import com.price.low.response.model.PointOfSaleRecord;
import com.price.low.response.model.ProductRecord;

/**
 * 
 * @author maurizio.franco@ymail.com
 *
 */
@Service
public class StoreRegistryService {

	public static final Logger logger = LoggerFactory.getLogger(StoreRegistryService.class);

	@Autowired
	private PointOfSaleRecordRepository pointOfSaleRecordRepository;

	/**
	 * Provides list of pointOfSale from repository
	 * 
	 * @return List<PointOfSaleRecord>
	 */
	public List<PointOfSaleRecord> getAll() {
		logger.info("getAll - START");
		List<PointOfSaleRecord> items = pointOfSaleRecordRepository.findAllPointsOfSale();
		logger.info("getAll - END - returning " + items.size() + " PointOfSaleRecord.");
		return items;
	}

}
