package com.petrolstation.controllers.services;

import com.petrolstation.models.services.Reservation;
import com.petrolstation.repositories.services.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    ReservationRepository reservationRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET, value="/getReservations")
    public List<Reservation> getReservations(@RequestBody String id){
        return reservationRepository.findAllByUserId(id);
    }

    @RequestMapping(method = RequestMethod.POST, value="/setReservation")
    public void setReservation(@RequestBody Reservation res){
        reservationRepository.save(res);
    }

}
