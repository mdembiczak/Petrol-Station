package com.petrolstation.models.people;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.services.Reservation;
import com.petrolstation.models.services.Service;
import com.petrolstation.models.services.Supply;
import org.springframework.data.annotation.Id;

import java.util.*;

abstract  class Person {

    @Id
    String id;
    String firstName;
    String lastName;
    String email;
    String password;
    String city;
    String postalcode;
    AccessRights accessRights;
    Optional<String> accountNumber;
    Map<Date,Integer> workingHours;
    List<Supply> supplyList;
    List<Reservation> reservationList;
    Map<Worker, Long> workers;
    Set<Service> services;

    public String getId() {
        return id;
    }

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
