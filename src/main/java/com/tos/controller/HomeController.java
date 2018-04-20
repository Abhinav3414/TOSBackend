package com.tos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {
	
    @GetMapping(value = "/")
    public String index(){
        return "Welcome to Tos Application. Please give correct url to get resources";
    }

}
