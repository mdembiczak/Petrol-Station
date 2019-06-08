package com.petrolstation.repositories.services;

import com.petrolstation.models.services.Reservation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends MongoRepository<Reservation, String> {
    Reservation findByIsDone(Boolean isDone);
    Reservation findByDate(Date date);
    @Override
    Optional<Reservation> findById(String s);
    List<Reservation> findReservationByUserId(String userId);
}
