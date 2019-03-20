package com.petrolstation.models.persons;

import com.petrolstation.models.services.Service;

import java.util.Map;
import java.util.Set;

public class Owner extends Person {

    public Map<Worker, Long> getWorkers() {
        return workers;
    }

    public void setWorkers(Map<Worker, Long> workers) {
        this.workers = workers;
    }

    public Set<Service> getServices() {
        return services;
    }

    public void setServices(Set<Service> services) {
        this.services = services;
    }

    public Owner build() {
        Owner owner = new Owner();
        owner.firstName = this.firstName;
        owner.lastName = this.lastName;
        owner.email = this.email;
        owner.password = this.password;
        owner.city = this.city;
        owner.postalcode = this.postalcode;
        owner.accessRights = this.accessRights;
        owner.workers = this.workers;
        owner.services = this.services;
        return owner;
    }

    public static final class Builder {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private String city;
        private String postalCode;
        private String accessRights;
        private Map<Worker, Long> workers;
        private Set<Service> services;

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

        public Builder workers(Map<Worker, Long> workers){
            this.workers = workers;
            return this;
        }

        public Builder services(Set<Service> services){
            this.services = services;
            return this;
        }
    }
}
