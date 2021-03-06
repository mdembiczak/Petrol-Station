package com.petrolstation.models.services;

import com.petrolstation.enums.services.ServiceTypes;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "services")
public class Service {
    @Id
    private String id;
    private String name;
    private Double price;
    private Date date;
    private ServiceTypes serviceType;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public ServiceTypes getServiceType() {
        return serviceType;
    }

    public void setServiceType(ServiceTypes serviceType) {
        this.serviceType = serviceType;
    }

    public static final class Builder{
        private String name;
        private Double price;
        private ServiceTypes serviceType;

        public Builder name(String name){
            this.name = name;
            return this;
        }

        public Builder price(Double price){
            this.price = price;
            return this;
        }

        public Builder serviceType(ServiceTypes serviceType){
            this.serviceType = serviceType;
            return this;
        }

        public Service build(){
            Service service = new Service();
            service.name = this.name;
            service.price = this.price;
            service.serviceType = this.serviceType;
            return service;
        }
    }
}
