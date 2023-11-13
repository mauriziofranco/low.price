#!/bin/bash
mysqldump -u lowprice_dev -h localhost -p lowprice_dev --no-create-info products price_registry > productsANDprice_registry.sql 
