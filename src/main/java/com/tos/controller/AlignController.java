package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tos.model.Align;
import com.tos.service.AlignService;

@RestController
@RequestMapping("/tos")
public class AlignController {
	
	@Autowired
	private AlignService alignService;

	@GetMapping("/aligns")
	public List<Align> getAllAlign(){
		return alignService.getAllAlign();
	}
	
	@GetMapping("/aligns/{id}")
	public Align getAlign(@PathVariable long id) {
		return alignService.getAlign(id);
	}
	
	@PostMapping("/aligns")
	public ResponseEntity<Align> addAlign(@RequestBody Align align) {
		Align custAlign = alignService.addAlign(align);
		if(custAlign==null) {
			return new ResponseEntity<Align>(custAlign, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Align>(custAlign, HttpStatus.OK);
	}
	
	@PutMapping("/aligns/{id}")
	public ResponseEntity<Void> updateAlign(@Valid @RequestBody Align align, @PathVariable Long id) {
		if(alignService.updateAlign(align, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/aligns/{id}")
	public ResponseEntity<Void> deleteAlign(@PathVariable long id) {
		if(alignService.deleteAlign(id)==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	
}
