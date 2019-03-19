package com.petrolstation.models;

import com.petrolstation.enums.AccessRights;

import java.util.*;

public abstract class Person {
    public Long id;
    public String firstName;
    public String lastName;
    public String email;
    public String password;
    public String city;
    public String postalcode;
    public AccessRights accessRights;
    public Optional<String> accountNumber;
    public Map<Date,Integer> workingHours;
    public List<Supply> supplyList;
    public List<Reservation> reservationList;
    public Map<Worker, Long> workers;
    public Set<Service> services;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalcode() {
        return postalcode;
    }

    public void setPostalcode(String postalcode) {
        this.postalcode = postalcode;
    }

    public AccessRights getAccessRights() {
        return accessRights;
    }

    public void setAccessRights(AccessRights accessRights) {
        this.accessRights = accessRights;
    }



}
