package com.petrolstation.repositories.services;

import com.petrolstation.models.services.LoyalityProgram;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoyalityProgramRepository extends MongoRepository<LoyalityProgram, String> {
}
