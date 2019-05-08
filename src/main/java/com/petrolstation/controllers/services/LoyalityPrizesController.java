package com.petrolstation.controllers.services;

import com.petrolstation.models.services.LoyalityPrizes;
import com.petrolstation.repositories.services.LoyalityPrizesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/loyality-prizes")
public class LoyalityPrizesController {

    @Autowired
    LoyalityPrizesRepository loyalityPrizesRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST)
    public void addPrize(@RequestBody LoyalityPrizes prize){
        loyalityPrizesRepository.save(prize);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public List<LoyalityPrizes> showPrices(){
        return loyalityPrizesRepository.findAll();
    }

    /*
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST,value="/deletePrize")
    public void deletePrize(@RequestBody LoyalityPrizes prize){
        loyalityPrizesRepository.delete(prize);
    }

     */
}
