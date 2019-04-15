package com.petrolstation.models.services;

import com.petrolstation.models.people.User;

import java.util.Set;

public class LoyalityProgram {
    Set<User> userSet;

    public Set<User> getUserSet() {
        return userSet;
    }

    public void setUserSet(Set<User> userSet) {
        this.userSet = userSet;
    }
}
