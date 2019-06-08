package com.petrolstation.controllers.services;


import com.petrolstation.models.services.PriceList;
import com.petrolstation.repositories.services.PriceListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value= "prices")
public class PriceListController {

    @Autowired
    PriceListRepository priceListRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public List<PriceList> showPrices(){
        return priceListRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public PriceList addPrice(@RequestBody PriceList priceList){
        return priceListRepository.save(priceList);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void editPrice(@RequestBody PriceList priceList){
        PriceList price = priceListRepository.findByFuelType(priceList.getFuelType());
        price.setPrice(priceList.getPrice());
        priceListRepository.save(price);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void deletePrice(@RequestParam String fuelType){
        priceListRepository.delete(priceListRepository.findByFuelType(fuelType));
    }
}
