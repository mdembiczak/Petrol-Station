package com.petrolstation.models.services;

import com.petrolstation.models.people.User;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Document(collection = "loyality-program")
public class LoyalityProgram {
    Set<User> userSet;

    public Set<User> getUserSet() {
        return userSet;
    }

    public void setUserSet(Set<User> userSet) {
        this.userSet = userSet;
    }
}
