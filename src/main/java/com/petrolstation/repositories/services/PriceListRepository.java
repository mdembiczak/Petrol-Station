package com.petrolstation.repositories.services;

import com.petrolstation.models.services.PriceList;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PriceListRepository extends MongoRepository<PriceList, String> {
}
