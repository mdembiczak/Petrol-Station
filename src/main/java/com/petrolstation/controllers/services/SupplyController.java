package com.petrolstation.controllers.services;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.enums.services.ServiceTypes;
import com.petrolstation.models.people.Worker;
import com.petrolstation.models.services.Service;
import com.petrolstation.models.services.Supply;
import com.petrolstation.repositories.people.WorkerRepository;
import com.petrolstation.repositories.services.SupplyRepository;
import com.petrolstation.utils.SupplyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(value = "/test")
public class SupplyController {

    @Autowired
    SupplyRepository supplyRepository;

    @Autowired
    SupplyMapper supplyMapper;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public List<Supply> showSupply() {
        return supplyRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST)
    public void addSupply(@RequestBody Supply supply, @RequestParam String firstName,
                          @RequestParam String lastName) {
        supplyRepository.save(supplyMapper.buildSupply(firstName, lastName, supply));
    }

}
