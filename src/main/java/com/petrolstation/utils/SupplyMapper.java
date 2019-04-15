package com.petrolstation.utils;

import com.petrolstation.models.people.Worker;
import com.petrolstation.models.services.Supply;
import com.petrolstation.repositories.people.WorkerRepository;
import com.petrolstation.repositories.services.ServiceRepository;
import com.petrolstation.repositories.services.SupplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class SupplyMapper {
    @Autowired
    SupplyRepository supplyRepository;

    @Autowired
    ServiceRepository serviceRepository;

    @Autowired
    WorkerRepository workerRepository;

    public Supply buildSupply(String firstName, String lastName, Supply supply) {

        Worker customerServiceShopper = workerRepository.findByFirstNameAndLastName(firstName,
                lastName);
        supply.getServices().forEach(service -> serviceRepository.save(service));
        supply.setWorker(customerServiceShopper);
        return supply;
    }
}
