package com.petrolstation.controllers.persons;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.Worker;
import com.petrolstation.repositories.people.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping(value = "/worker")
public class WorkerController {
    @Autowired
    WorkerRepository workerRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public Worker getUserById(@RequestParam String id){
        return workerRepository.findById(id).get();
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Worker> getAllWorkers(){
        return workerRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET)
    public Worker getWorker(@RequestParam String firstName, @RequestParam String lastName){
        return workerRepository.findByFirstNameAndLastName(firstName, lastName);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Worker addWorker(@RequestBody Worker worker){
        worker.setWorkingHours(new HashMap<>());
        return workerRepository.save(worker);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void addWorkingHours(String firstName, String lastName, Date date, Integer hours){
        Worker worker = workerRepository.findByFirstNameAndLastName(firstName, lastName);
        worker.getWorkingHours().put(date, hours);
        workerRepository.save(worker);
    }
}
