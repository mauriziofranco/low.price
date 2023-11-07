package com.price.low.repository.custom;

import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.price.low.response.model.PointOfSaleRecord;
/**
 * ProductRecordRepository
 * 
 * @author maurizio.franco@ymail.com
 *
 */
@Repository
public class PointOfSaleRecordRepositoryImpl implements PointOfSaleRecordRepository {
	
	private final JdbcTemplate jdbcTemplate;

    public PointOfSaleRecordRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

//    select * from point_of_sale p
//    JOIN brand br ON p.brand_id = br.brand_id
//    order by p.point_of_sale_id
    public List<PointOfSaleRecord> findAllPointsOfSale() {
        return jdbcTemplate.query(
        		"select * from point_of_sale p\r\n"
        		+ "     JOIN brand br ON p.brand_id = br.brand_id\r\n"
        		+ "     order by p.point_of_sale_id", (rs, rowNum) -> new PointOfSaleRecord(
        				rs.getLong("point_of_sale_id"),
        				rs.getLong("brand_id"),
        				rs.getString("point_of_sale_full_business_name"),
        		        rs.getString("point_of_sale_city"),
        		        rs.getString("point_of_sale_address"),
        		        rs.getString("point_of_sale_province"),
		                rs.getTimestamp("point_of_sale_insert_datetime"),
		                rs.getString("brand_name"),
		                rs.getString("brand_full_business_name")
		        ));
    }
	
}
