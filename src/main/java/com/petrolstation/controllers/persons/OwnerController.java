package com.petrolstation.controllers.persons;

import com.petrolstation.models.people.Owner;
import com.petrolstation.repositories.people.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/owner")
public class OwnerController {

    @Autowired
    OwnerRepository ownerRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public Owner getUserById(@RequestParam String id){

        return ownerRepository.findById(id).get();
    }
}
