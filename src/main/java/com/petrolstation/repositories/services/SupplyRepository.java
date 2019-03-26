package com.petrolstation.repositories.services;

import com.petrolstation.models.people.Worker;
import com.petrolstation.models.services.Service;
import com.petrolstation.models.services.Supply;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;

public interface SupplyRepository extends MongoRepository<Supply, String> {
    Supply findByWorker(Worker worker);
    Supply findByServices(Service service);
    Supply findByDate(Date date);
    Supply findByIsPaidAndDate(Boolean isPaid, Date date);
    Supply findByWorkerAndIsPaid(Worker worker, Boolean isPaid);
}
