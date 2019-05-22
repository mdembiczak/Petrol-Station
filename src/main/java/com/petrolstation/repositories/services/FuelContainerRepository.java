package com.petrolstation.repositories.services;

import com.petrolstation.models.services.FuelContainer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FuelContainerRepository extends MongoRepository<FuelContainer, String> {
    FuelContainer findByContainerNr(int containerNr);
}
