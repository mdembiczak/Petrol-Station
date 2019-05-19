package com.petrolstation.repositories.people;

import com.petrolstation.models.people.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OwnerRepository extends MongoRepository<Owner, String> {
    Owner findByEmailAndPasswordAndAccessRights(String email, String password, String
            accessRights);
}
