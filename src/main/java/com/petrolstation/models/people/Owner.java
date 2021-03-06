package com.petrolstation.models.people;

import com.petrolstation.models.services.Service;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;
import java.util.Set;

@Document(collection = "person")
public class Owner extends Person {

    public Owner() {
    }


    public Owner build() {
        Owner owner = new Owner();
        owner.firstName = this.firstName;
        owner.lastName = this.lastName;
        owner.email = this.email;
        owner.password = this.password;
        owner.city = this.city;
        owner.postalCode = this.postalCode;
        owner.accessRights = this.accessRights;
        return owner;
    }

    public static final class Builder {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private String city;
        private String postalCode;
        private String accessRights;

        public Builder firstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder city(String city) {
            this.city = city;
            return this;
        }

        public Builder postalCode(String postalCode) {
            this.postalCode = postalCode;
            return this;
        }

        public Builder accessRight(String accessRights){
            this.accessRights = accessRights;
            return this;
        }
    }
}
