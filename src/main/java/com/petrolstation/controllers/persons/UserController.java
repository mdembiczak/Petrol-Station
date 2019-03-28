package com.petrolstation.controllers.persons;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.User;
import com.petrolstation.repositories.people.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController
@RequestMapping(value = "users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/{email}")
    public User getUserById(@PathVariable String email){
        return userRepository.findByEmail(email);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{email}/{password}")
    public Boolean getValidation(@PathVariable String email, @PathVariable String password){
        return userRepository.findByEmailAndPassword(email, password) != null;
    }

    @RequestMapping(method = RequestMethod.POST)
    public User addUser(@RequestBody User user) {
        User newUser = new User.Builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .city(user.getCity())
                .postalCode(user.getPostalCode())
                .email(user.getEmail())
                .password(user.getPassword())
                .accessRight(AccessRights.USER.toString())
                .supplies(new ArrayList<>())
                .reservations(new ArrayList<>())
                .build();
        userRepository.save(newUser);
        return newUser;
    }
}
