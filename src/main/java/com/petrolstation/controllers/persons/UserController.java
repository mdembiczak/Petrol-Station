package com.petrolstation.controllers.persons;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.User;
import com.petrolstation.models.services.PriceList;
import com.petrolstation.repositories.people.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping(value = "users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public User getUserById(@RequestParam String id){
        return userRepository.findById(id).get();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{email}/{password}")
    public Boolean getValidation(@PathVariable String email, @PathVariable String password){
        return userRepository.findByEmailAndPassword(email, password) != null;
    }
    

    @CrossOrigin(origins = "http://localhost:3000")
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
                .amountPoints(0)
                .supplies(new ArrayList<>())
                .reservations(new ArrayList<>())
                .build();
        userRepository.save(newUser);
        return newUser;
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{email}")
    public User editUser(@RequestBody User user, @PathVariable String email){
        User editedUser = userRepository.findByEmail(email);
        if(user.getFirstName()!= null){
            editedUser.setFirstName(user.getFirstName());
        }
        if(user.getLastName() != null){
            editedUser.setLastName(user.getLastName());
        }
        if(user.getCity() != null) {
            editedUser.setCity(user.getCity());
        }
        if(user.getPostalCode() != null){
            editedUser.setPostalCode(user.getPostalCode());
        }
        if(user.getPassword() != null) {
            editedUser.setPassword(user.getPassword());
        }

        userRepository.save(editedUser);
        return editedUser;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST, value="/updatePoints")
    public void updatePoints(@RequestParam String mail, @RequestParam int amount){
        User u = userRepository.findByEmail(mail);
        u.setAmountPoints(u.getAmountPoints()-amount);
        userRepository.save(u);
    }

    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET, value="/allUsers")
    public List<User> allUsers(){
        return userRepository.findAllByAccessRights("USER");
    }
}
