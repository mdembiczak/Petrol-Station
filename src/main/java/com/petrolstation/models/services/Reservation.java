package com.petrolstation.models.services;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "reservations")
public class Reservation {
    @Id
    private String id;
    private Supply supply;
    private Date date;
    private Boolean isDone;

    public String getId() {
        return id;
    }

    public Supply getSupply() {
        return supply;
    }

    public void setSupply(Supply supply) {
        this.supply = supply;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Boolean getDone() {
        return isDone;
    }

    public void setDone(Boolean done) {
        isDone = done;
    }

    public Reservation build(){
        Reservation reservation = new Reservation();
        reservation.date = this.date;
        reservation.supply = this.supply;
        reservation.isDone = this.isDone;
        return reservation;
    }

    public final static class Builder{
        private Supply supply;
        private Date date;
        private Boolean isDone;

        public Builder supply(Supply supply){
            this.supply = supply;
            return this;
        }

        public Builder date(Date date){
            this.date = date;
            return this;
        }

        public Builder isDone(Boolean isDone){
            this.isDone = isDone;
            return this;
        }
    }
}
