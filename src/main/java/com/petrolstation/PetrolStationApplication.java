package com.petrolstation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class PetrolStationApplication {
    public static void main(String[] args) {
        SpringApplication.run(PetrolStationApplication.class, args);
    }
}
