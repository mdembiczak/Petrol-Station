package com.petrolstation.repositories.services;

import com.petrolstation.enums.services.ServiceTypes;
import com.petrolstation.models.services.Service;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ServiceRepository extends MongoRepository<Service, String> {
    Service findByNameAndPrice(String name, Double price);
    Service findByName(String name);
    Service findByPrice(Double price);
    Service findByServiceType(ServiceTypes serviceType);
    List<Service> findAllByName(String name);
}
