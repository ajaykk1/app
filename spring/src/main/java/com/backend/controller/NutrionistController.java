package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.NutrionistModel;
import com.backend.service.NutrionistService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
//@RequestMapping("/api")
public class NutrionistController {
@Autowired
NutrionistService nutrionistService;
	@GetMapping("home")
	public List<NutrionistModel>getNutrionist(){
		return nutrionistService.getAllNutrionist();
	}
	@PostMapping("formdata")
	public NutrionistModel addNutrionist(@RequestBody NutrionistModel nutrionist) {
		return nutrionistService.addAllNutrionist(nutrionist);
	}
	
}
