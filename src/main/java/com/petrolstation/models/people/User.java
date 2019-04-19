package com.petrolstation.models.people;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.services.Reservation;
import com.petrolstation.models.services.Supply;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "person")
public class User extends Person {
    public List<Supply> getSupplyList() {
        return supplyList;
    }

    public void setSupplyList(List<Supply> supplyList) {
        this.supplyList = supplyList;
    }

    public List<Reservation> getReservationList() {
        return reservationList;
    }

    public void setReservationList(List<Reservation> reservationList) {
        this.reservationList = reservationList;
    }

    private User(){

    }

    public static final class Builder {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private String city;
        private String postalCode;
        private String accessRights;
        private List<Supply> supplies;
        private List<Reservation> reservations;

        public Builder(){

        }

        public Builder firstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder city(String city) {
            this.city = city;
            return this;
        }

        public Builder postalCode(String postalCode) {
            this.postalCode = postalCode;
            return this;
        }

        public Builder accessRight(String accessRights){
            this.accessRights = accessRights;
            return this;
        }

        public Builder supplies(List<Supply> supplies) {
            this.supplies = supplies;
            return this;
        }

        public Builder reservations(List<Reservation> reservations) {
            this.reservations = reservations;
            return this;
        }

        public User build() {
            User user = new User();
            user.firstName = this.firstName;
            user.lastName = this.lastName;
            user.email = this.email;
            user.password = this.password;
            user.city = this.city;
            user.postalCode = this.postalCode;
            user.accessRights = AccessRights.valueOf(this.accessRights);
            user.supplyList = this.supplies;
            user.reservationList = this.reservations;
            return user;
        }
    }
}
