package com.petrolstation.controllers.services;

import com.petrolstation.models.services.FuelContainer;
import com.petrolstation.repositories.services.FuelContainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/fuel-container")
public class FuelContainerController {

    @Autowired
    FuelContainerRepository fuelContainerRepository;

    @RequestMapping(method = RequestMethod.GET)
    public FuelContainer getFuelContainer(){
        return fuelContainerRepository.findAll().get(0);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addFuelContainer(@RequestBody FuelContainer fuelContainer){
        fuelContainer.setId(1L);
        fuelContainerRepository.save(fuelContainer);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void updateFuelContainer(@RequestBody FuelContainer fuelContainer){
        FuelContainer editFuelContainer = fuelContainerRepository.findAll().get(0);
        if(fuelContainer.getLiters() != null){
            editFuelContainer.setLiters(fuelContainer.getLiters());
        }
    }
}
