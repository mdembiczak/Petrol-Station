package com.petrolstation.models.services;

import org.springframework.data.annotation.Id;

public class FuelContainer {
    @Id
    Long id;
    Double liters;

    public FuelContainer(Long id, Double liters) {
        this.id = id;
        this.liters = liters;
    }

    public FuelContainer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getLiters() {
        return liters;
    }

    public void setLiters(Double liters) {
        this.liters = liters;
    }
}
