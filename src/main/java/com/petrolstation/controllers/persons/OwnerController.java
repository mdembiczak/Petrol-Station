package com.petrolstation.controllers.persons;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.Owner;
import com.petrolstation.repositories.people.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "owner")
public class OwnerController {
    @Autowired
    OwnerRepository ownerRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public Owner getWorkerById(@RequestParam String id) {
        return ownerRepository.findById(id).get();
    }



    @RequestMapping(method = RequestMethod.POST)
    public Owner addWorker(@RequestBody Owner owner) {
        owner.setAccessRights(AccessRights.OWNER);
        return ownerRepository.save(owner);
    }
}
