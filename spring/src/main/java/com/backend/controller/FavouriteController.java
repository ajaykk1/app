package com.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Favourite;
import com.backend.service.FavouriteService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class FavouriteController {
	@Autowired
	private FavouriteService favouriteService;
	@GetMapping("get")
	public List<Favourite>getFavourite(){
		return favouriteService.getAllFavourite();
	}
	 @PostMapping("addfavourite")
	 public void addFavourite(@RequestBody Favourite favourite) {
		 favouriteService.saveFavourite(favourite);
		 System.out.println("working");
	 }
	 @GetMapping("getid/{id}")
	 public ResponseEntity<Favourite>getFavouriteId(@PathVariable int id){
		 System.out.println("oh it worked again");
		 return favouriteService.getFavouriteId(id);
	 }
	 @PutMapping("update/{id}")
	 public ResponseEntity<Favourite>updateFavourite(@PathVariable int id,@RequestBody Favourite favourite){
		 return favouriteService.updateFavourite(id, favourite);
	 }
	 @DeleteMapping("delete/{id}")
	 public ResponseEntity<Map<String,Boolean>>deleteFavourite(@PathVariable int id){
		 return favouriteService.deleteFavourite(id);
	 }
}
