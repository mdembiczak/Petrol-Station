package com.petrolstation.controllers;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.Owner;
import com.petrolstation.models.people.Person;
import com.petrolstation.models.people.User;
import com.petrolstation.models.people.Worker;
import com.petrolstation.repositories.people.OwnerRepository;
import com.petrolstation.repositories.people.UserRepository;
import com.petrolstation.repositories.people.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "auth")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    OwnerRepository ownerRepository;

    @Autowired
    WorkerRepository workerRepository;

    @RequestMapping(value = "user", method = RequestMethod.GET)
    public Person getUser(@RequestParam String email, @RequestParam String password) {

        User user = userRepository.findByEmailAndPasswordAndAccessRights(email, password,
                AccessRights.USER.toString());
        if (user != null) {
            return user;
        }

        Owner owner = ownerRepository.findByEmailAndPasswordAndAccessRights(email, password,
                AccessRights.OWNER.toString());
        if (owner != null) {
            return owner;
        }

        Worker worker = workerRepository.findByEmailAndPasswordAndAccessRights(email, password,
                AccessRights.SHOP_ASSISTANT.toString());
        if (worker != null) {
            return worker;
        }

        worker = workerRepository.findByEmailAndPasswordAndAccessRights(email, password,
                AccessRights.SECURITY_EMPLOYEE.toString());
        if (worker != null) {
            return worker;
        }

        return null;
    }
}
