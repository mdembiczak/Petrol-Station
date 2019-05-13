package com.petrolstation.repositories.people;

import com.petrolstation.models.people.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
    User findByEmailAndPassword(String email, String password);
    User findByEmailAndPasswordAndAccessRights(String email, String password, String accessRights);
    User findByEmailAndAmountPoints(String email, int amount);
}
