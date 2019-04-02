package com.petrolstation.controllers.services;

import com.petrolstation.models.services.Reservation;
import com.petrolstation.models.services.Service;
import com.petrolstation.repositories.services.ReservationRepository;
import com.petrolstation.repositories.services.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
