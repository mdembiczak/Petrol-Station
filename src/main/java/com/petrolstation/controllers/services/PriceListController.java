package com.petrolstation.controllers.services;


import com.petrolstation.models.services.PriceList;
import com.petrolstation.repositories.services.PriceListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value= "/prices")
public class PriceListController {
    @Autowired
    PriceListRepository priceListRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public List<PriceList> showPrices(){
        return priceListRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addPrice(@RequestBody PriceList priceList){
        priceListRepository.save(priceList);
    }
}
