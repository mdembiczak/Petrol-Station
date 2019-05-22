package com.petrolstation.models.services;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "fuel-container")
public class FuelContainer {

    @Id
    String id;
    int containerNr;
    String fuelType;
    Double pressure;
    Double temperature;
    Double liters;

    public FuelContainer(String id, int containerNr, String fuelType, Double pressure, Double temperature, Double liters) {
        this.id = id;
        this.containerNr = containerNr;
        this.fuelType = fuelType;
        this.pressure = pressure;
        this.temperature = temperature;
        this.liters = liters;
    }
    public FuelContainer() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Double getLiters() {
        return liters;
    }

    public void setLiters(Double liters) {
        this.liters = liters;
    }

    public int getContainerNr() { return containerNr; }

    public void setContainerNr(int containerNr) { this.containerNr = containerNr; }

    public String getFuelType() { return fuelType; }

    public void setFuelType(String fuelType) { this.fuelType = fuelType; }

    public Double getPressure() { return pressure; }

    public void setPressure(Double pressure) { this.pressure = pressure; }

    public Double getTemperature() { return temperature; }

    public void setTemperature(Double temperature) { this.temperature = temperature; }

}
