package com.petrolstation.controllers.services;

import com.petrolstation.models.services.LoyalityPrizes;
import com.petrolstation.repositories.services.LoyalityPrizesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/loyality-prizes")
public class LoyalityPrizesController {
    @Autowired
    LoyalityPrizesRepository loyalityPrizesRepository;

    @RequestMapping
    public void addPrize(@RequestBody LoyalityPrizes prize){
        loyalityPrizesRepository.save(prize);
    }

    @RequestMapping
    public void deletePrize(@RequestBody LoyalityPrizes prize){
        loyalityPrizesRepository.delete(prize);
    }
}
