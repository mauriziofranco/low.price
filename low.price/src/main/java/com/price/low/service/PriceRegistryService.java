package com.price.low.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.price.low.entity.PriceRegistry;
import com.price.low.repository.PriceRegistryRepository;

/**
 * 
 * @author maurizio.franco@ymail.com
 *
 */
@Service
public class PriceRegistryService {

	public static final Logger logger = LoggerFactory.getLogger(PriceRegistryService.class);

	@Autowired
	private PriceRegistryRepository priceRegistryRepository ;
	
	/**
	 * Provides to insert new selling price for item
	 * 
	 * @param PriceRegistry
	 * @return
	 */
	public PriceRegistry insertPriceRegistryEntity (PriceRegistry entity) {
		logger.info("insert - START - with PriceRegistry {}", entity);
		return priceRegistryRepository.saveAndFlush(entity);
	}

}
