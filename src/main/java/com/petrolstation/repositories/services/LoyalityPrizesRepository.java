package com.petrolstation.repositories.services;

import com.petrolstation.models.services.LoyalityPrizes;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoyalityPrizesRepository  extends MongoRepository<LoyalityPrizes, String> {
    LoyalityPrizes findByPrizeName(String prizeName);
}
