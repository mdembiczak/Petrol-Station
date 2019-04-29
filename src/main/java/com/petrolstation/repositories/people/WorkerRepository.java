package com.petrolstation.repositories.people;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.Worker;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkerRepository extends MongoRepository<Worker, String> {
    Worker findByAccessRights(AccessRights accessRights);
    Worker findByAccountNumber(String accountNumber);
    Worker findByFirstNameAndLastName(String firstName, String lastName);
    Worker findByEmailAndPasswordAndAccessRights(String email, String password, String
            accessRights);
}
