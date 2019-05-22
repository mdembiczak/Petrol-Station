package com.petrolstation.controllers.persons;

import com.petrolstation.enums.persons.AccessRights;
import com.petrolstation.models.people.Worker;
import com.petrolstation.repositories.people.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping(value = "worker")
public class WorkerController {
    @Autowired
    WorkerRepository workerRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET)
    public Worker getWorkerById(@RequestParam String id) {
        return workerRepository.findById(id).get();
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Worker> getAllWorkers() {
        return workerRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST)
    public Worker addWorker(@RequestBody Worker worker) {
        worker.setWorkingHours(new HashMap<>());
        worker.setAccessRights(AccessRights.SECURITY_EMPLOYEE);
        worker.setAccountNumber(worker.getAccountNumber());
        return workerRepository.save(worker);
    }
}
