package com.petrolstation.controllers.services;

import com.petrolstation.models.services.Supply;
import com.petrolstation.repositories.services.SupplyRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/supply")
public class SupplyController {

    SupplyRepository supplyRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public List<Supply> showSupply(){
        return supplyRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST)
    public void addSupply(@RequestBody Supply supplyList){
        supplyRepository.save(supplyList);
    }

}
