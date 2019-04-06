package com.petrolstation.controllers.services;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.enums.services.ServiceTypes;
import com.petrolstation.models.people.Worker;
import com.petrolstation.models.services.PriceList;
import com.petrolstation.models.services.Service;
import com.petrolstation.models.services.Supply;
import com.petrolstation.repositories.services.SupplyRepository;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(value = "/test")
public class SupplyController {

    SupplyRepository supplyRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public List<Supply> showSupply(){
        return supplyRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST)
    public void addSupply(@RequestBody Supply supply){
        Worker w = new Worker.Builder()
                .firstName("imie")
                .lastName("nazwisko")
                .email("email@email.com")
                .password("haslo")
                .postalCode("kod")
                .city("miasto")
                .accountNumber(Optional.empty())
                .accessRight(AccessRights.SHOP_ASSISTANT)
                .workingHours(new HashMap<>())
                .build();

        Service s = new Service.Builder()
                .name("nazwa")
                .price(1.12)
                .serviceType(ServiceTypes.REFUELING)
                .build();

        Set set = new HashSet();
        set.add(s);

        supply.setWorker(w);
        supply.setServices(set);
        supplyRepository.save(supply);
    }

}
