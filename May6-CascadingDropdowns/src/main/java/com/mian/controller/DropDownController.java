package com.mian.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mian.model.Cities;
import com.mian.model.States;
import com.mian.serviceI.DropDownServiceI;

@RestController
@CrossOrigin("*")
public class DropDownController {

	
	@Autowired
	DropDownServiceI ddsi;
	
	@PostMapping("/save")
	public ResponseEntity<States> saveStates(@RequestBody States states){
		
		States states2 = ddsi.saveStates(states);
		
		return new ResponseEntity<States>(states2,HttpStatus.CREATED);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<States>> getData(){
		List<States> data = ddsi.getData();
		return new ResponseEntity<List<States>>(data, HttpStatus.OK);
	}
	
	@GetMapping("/states/{id}")
	public ResponseEntity<List<Cities>> getData(@PathVariable int id){
		List<Cities> list = ddsi.getData(id);
		
		return  new ResponseEntity<List<Cities>>(list, HttpStatus.OK);
	}
	
	
	
	
}
