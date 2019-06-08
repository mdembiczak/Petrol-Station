package com.petrolstation.controllers.services;

import com.petrolstation.models.services.FuelContainer;
import com.petrolstation.repositories.services.FuelContainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("fuel-container")
public class FuelContainerController {

    @Autowired
    FuelContainerRepository fuelContainerRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public List<FuelContainer> getFuelContainer(){
        return fuelContainerRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addFuelContainer(@RequestBody FuelContainer fuelContainer){
        fuelContainerRepository.save(fuelContainer);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.PUT)
    public void updateFuelContainer(@RequestBody FuelContainer fuelContainer){
        FuelContainer editFuelContainer = fuelContainerRepository.findAll().get(0);
        if(fuelContainer.getLiters() != null){
            editFuelContainer.setLiters(fuelContainer.getLiters());
        }
    }
}
