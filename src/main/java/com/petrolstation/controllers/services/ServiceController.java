package com.petrolstation.controllers.services;

import com.petrolstation.models.services.Service;
import com.petrolstation.repositories.services.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/service")
public class ServiceController {

    @Autowired
    ServiceRepository serviceRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public List<Service> showServices(){
        return serviceRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addPrice(@RequestBody Service service){
        serviceRepository.save(service);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET, value="/getUsersHistory")
    public List<Service> showUsersHistory(@RequestParam String name){return serviceRepository.findAllByName(name);}


    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST, value="/getReport")
    public List<Service> showReport(@DateTimeFormat(pattern = "yyyy-MM-dd") @RequestParam Date one, @DateTimeFormat(pattern = "yyyy-MM-dd") @RequestParam Date two){
        return serviceRepository.findAllByDateBetween(one,two);
    }
}
