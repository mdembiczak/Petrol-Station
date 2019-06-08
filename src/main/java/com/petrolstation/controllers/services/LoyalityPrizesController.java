package com.petrolstation.controllers.services;

import com.petrolstation.models.services.LoyalityPrizes;
import com.petrolstation.repositories.services.LoyalityPrizesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "loyality-prizes")
public class LoyalityPrizesController {

    @Autowired
    LoyalityPrizesRepository loyalityPrizesRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST)
    public LoyalityPrizes addPrize(@RequestBody LoyalityPrizes prize){
        return loyalityPrizesRepository.save(prize);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public List<LoyalityPrizes> showPrices(){
        return loyalityPrizesRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void deletePrize(@RequestParam String name){
        loyalityPrizesRepository.delete(loyalityPrizesRepository.findByPrizeName(name));
    }

    /*
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST,value="/deletePrize")
    public void deletePrize(@RequestBody LoyalityPrizes prize){
        loyalityPrizesRepository.delete(prize);
    }

     */
}
