package com.petrolstation.controllers.services;

import com.petrolstation.models.services.Reservation;
import com.petrolstation.repositories.services.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("reservation")
public class ReservationController {

    @Autowired
    ReservationRepository reservationRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET, value = "getReservations")
    public List<Reservation> getReservations(@RequestParam String userId) {
        return reservationRepository.findReservationByUserId(userId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST, value = "setReservation")
    public Reservation setReservation(@RequestBody Reservation res) {
        reservationRepository.save(res);
        return res;
    }

    @RequestMapping(method = RequestMethod.POST, value = "confirm")
    public Optional<Reservation> confirmReservation(@RequestParam String id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);
        if (reservation.isPresent()) {
            reservation.get().setDone(true);
            reservationRepository.save(reservation.get());
            return reservation;
        }
        return Optional.empty();
    }

    @RequestMapping(method = RequestMethod.GET)
    public Optional<Reservation> getReservationById(@RequestParam String id){
        return reservationRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "delete")
    public void deleteReservation(@RequestParam String id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);
        reservation.ifPresent(res -> reservationRepository.delete(res));
    }
}
