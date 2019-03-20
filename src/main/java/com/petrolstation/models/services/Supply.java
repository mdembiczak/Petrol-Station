package com.petrolstation.models.services;

import com.petrolstation.models.persons.Worker;

import java.util.Date;
import java.util.Set;

public class Supply {
    private Long id;
    private Date date;
    private Worker worker;
    private Set<Service> services;
    private Boolean isPaid;

    public Long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }

    public Set<Service> getServices() {
        return services;
    }

    public void setServices(Set<Service> services) {
        this.services = services;
    }

    public Boolean getPaid() {
        return isPaid;
    }

    public void setPaid(Boolean paid) {
        isPaid = paid;
    }

    public Supply build(){
        Supply supply = new Supply();
        supply.date = this.date;
        supply.worker = this.worker;
        supply.services = this.services;
        supply.isPaid = this.isPaid;
        return supply;
    }

    public static final class Builder{
        private Date date;
        private Worker worker;
        private Set<Service> services;
        private Boolean isPaid;

        public Builder date(Date date){
            this.date = date;
            return this;
        }

        public Builder worker(Worker worker){
            this.worker = worker;
            return this;
        }

        public Builder services(Set<Service> services){
            this.services = services;
            return this;
        }

        public Builder isPaid(Boolean isPaid){
            this.isPaid = isPaid;
            return this;
        }
    }
}
