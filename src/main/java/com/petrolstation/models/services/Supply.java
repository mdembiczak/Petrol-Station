package com.petrolstation.models.services;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.petrolstation.models.people.Worker;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.Set;

public class Supply {
    @Id
    private Long id;
    private Date date;
    private Worker worker;
    private Set<Service> services;
    @JsonProperty("isPaid")
    private boolean isPaid;

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

    public boolean getPaid() {
        return isPaid;
    }

    public void setPaid(boolean paid) {
        isPaid = paid;
    }



    public static final class Builder{
        private Date date;
        private Worker worker;
        private Set<Service> services;
        private boolean isPaid;

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

        public Builder isPaid(boolean isPaid){
            this.isPaid = isPaid;
            return this;
        }

        public Supply build(){
            Supply supply = new Supply();
            supply.date = this.date;
            supply.worker = this.worker;
            supply.services = this.services;
            supply.isPaid = this.isPaid;
            return supply;
        }
    }
}
