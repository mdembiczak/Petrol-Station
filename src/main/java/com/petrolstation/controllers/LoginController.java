package com.petrolstation.controllers;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.Owner;
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
    public User getUser(@RequestParam String email, @RequestParam String password) {
        return userRepository.findByEmailAndPasswordAndAccessRights(email, password,
                AccessRights.USER.toString());
    }

    @RequestMapping(value = "worker", method = RequestMethod.GET)
    public Worker getWorker(@RequestParam String email, @RequestParam String password) {
        return workerRepository.findByEmailAndPasswordAndAccessRights(email, password,
                AccessRights.SHOP_ASSISTANT.toString());
    }

    @RequestMapping(value = "owner", method = RequestMethod.GET)
    public Owner getOwner(@RequestParam String email, @RequestParam String password) {
        return ownerRepository.findByEmailAndPasswordAndAccessRights(email, password,
                AccessRights.OWNER.toString());
    }
}
