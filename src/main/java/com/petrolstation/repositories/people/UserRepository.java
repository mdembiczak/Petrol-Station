package com.petrolstation.repositories.people;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByAccessRights(AccessRights accessRights);
    User findByEmail(String email);
    User findByEmailAndPassword(String email, String password);
}
