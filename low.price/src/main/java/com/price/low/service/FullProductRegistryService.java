package com.price.low.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.price.low.repository.custom.ProductRecordRepository;
import com.price.low.response.model.ProductRecord;

/**
 * 
 * @author maurizio.franco@ymail.com
 *
 */
@Service
public class FullProductRegistryService {

	public static final Logger logger = LoggerFactory.getLogger(FullProductRegistryService.class);

	@Autowired
	private ProductRecordRepository productRecordRepository;
	@Autowired
	private ProductDetailsWWWFinderService productDetailsWWWFinderService;

	/**
	 * Provides list of ProductRecord from repository
	 * 
	 * @return List<ProductRecord>
	 */
	public List<ProductRecord> getAll() {
		logger.info("getAll - START");
		List<ProductRecord> items = productRecordRepository.findAllProducts();
		logger.info("getAll - END - returning " + items.size() + " ProductRecord.");
		return items;
	}
	
	/**
	 * Provides ProductRecord for barcode received...
	 * It provides to search into local database and if it doesn't exists provides to call external api
	 * 
	 * @return ProductRecord
	 */
	public Optional<ProductRecord> getByBarcode(String barcode) {
		logger.info("getByBarcode - START with barcode: {}", barcode);
//		Optional<ProductRecord> optionalItem = Optional.ofNullable(productRecordRepository.findByBarcode(barcode));
		Optional<ProductRecord> optionalItem ;
		try {
			optionalItem = Optional.ofNullable(productRecordRepository.findByBarcode(barcode));
		} catch (Exception e) {
			logger.error("getByBarcode - ERROR in looking for product with barcode: {}, NO PRODUCT WITH THIS BARCODE IN OUR DATABASE.", barcode);
			optionalItem = Optional.ofNullable(null);
		}
		if (optionalItem.isEmpty()) {
			optionalItem = Optional.ofNullable(productDetailsWWWFinderService.findByBarcode(barcode));
		}
		logger.info("getByBarcode - END - finded something: {}", optionalItem.isPresent());
		return optionalItem;
	}

}
