package com.tos.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/")
public class HomeController {
	
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView indexRedirect() {
            return new ModelAndView("redirect:" + "index.html");
    }
    
    @RequestMapping(value = "/view/*", method = RequestMethod.GET)
    public ModelAndView viewUriRedirect() {
            return new ModelAndView("redirect:" + "../index.html");
    }
    
    @RequestMapping(value = "/view/*/*", method = RequestMethod.GET)
    public ModelAndView viewUriRedirectNested() {
            return new ModelAndView("redirect:" + "../index.html");
    }
    
    
}
