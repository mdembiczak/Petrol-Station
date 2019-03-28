package com.petrolstation.repositories.services;

import com.petrolstation.models.services.Reservation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;

public interface ReservationRepository extends MongoRepository<Reservation, String> {
    Reservation findByIsDone(Boolean isDone);
    Reservation findByDate(Date date);
}