package com.petrolstation.repositories.people;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OwnerRepository extends MongoRepository<Owner, String> {
    Owner findByAccessRights(AccessRights accessRights);
    Owner findByEmailAndPasswordAndAccessRights(String email, String password, String accessRights);
}
