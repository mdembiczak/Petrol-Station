package com.petrolstation.controllers.persons;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {
    @GetMapping("/")
    public String indexPage(Model model){
        return "Index.html";
    }
}
