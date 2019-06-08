package com.petrolstation.controllers.services;

import com.petrolstation.models.people.User;
import com.petrolstation.models.services.LoyalityProgram;
import com.petrolstation.repositories.services.LoyalityProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping(value = "loyality-program")
public class LoyalityProgramController {

    @Autowired
    LoyalityProgramRepository loyalityProgramRepository;

    @RequestMapping(method = RequestMethod.GET)
    public LoyalityProgram getLoyalityProgram() {
        return loyalityProgramRepository.findAll().get(0);
    }

    @RequestMapping(method = RequestMethod.POST, value = "create-loyality-program")
    public LoyalityProgram createLoyalityProgram(){
        LoyalityProgram loyalityProgram = new LoyalityProgram();
        loyalityProgram.setUserSet(new HashSet<>());
        return loyalityProgramRepository.save(loyalityProgram);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public String putLoyalityProgram(User user){
        LoyalityProgram loyalityProgram = loyalityProgramRepository.findAll().get(0);
        Set<User> users = loyalityProgram.getUserSet();
        users.add(user);
        loyalityProgram.setUserSet(users);
        loyalityProgramRepository.save(loyalityProgram);
        return "Updated Loyality Program";
    }

}
