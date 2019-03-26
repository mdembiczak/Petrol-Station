package com.petrolstation.models.people;

import java.util.Date;
import java.util.Map;
import java.util.Optional;

public class Worker extends Person {
    public Optional<String> getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(Optional<String> accountNumber) {
        this.accountNumber = accountNumber;
    }

    public Map<Date, Integer> getWorkingHours() {
        return workingHours;
    }

    public void setWorkingHours(Map<Date, Integer> workingHours) {
        this.workingHours = workingHours;
    }

    public Worker build() {
        Worker worker = new Worker();
        worker.firstName = this.firstName;
        worker.lastName = this.lastName;
        worker.email = this.email;
        worker.password = this.password;
        worker.city = this.city;
        worker.postalcode = this.postalcode;
        worker.accessRights = this.accessRights;
        worker.accountNumber = this.accountNumber;
        worker.workingHours = this.workingHours;
        return worker;
    }

    public static final class Builder {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private String city;
        private String postalCode;
        private String accessRights;
        private Optional<String> accountNumber;
        private Map<Date,Integer> workingHours;

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

        public Builder accountNumber(Optional<String> accountNumber){
            this.accountNumber = accountNumber;
            return this;
        }

        public Builder workingHours(Map<Date, Integer> workingHours){
            this.workingHours = workingHours;
            return this;
        }
    }

}
