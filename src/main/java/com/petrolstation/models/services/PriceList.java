package com.petrolstation.models.services;

import org.springframework.data.annotation.Id;

public class PriceList {

    @Id
    String id;
    String fuelType;
    Double price;

    public PriceList() {

    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
