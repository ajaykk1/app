package com.backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.backend.model.Favourite;
import com.backend.repository.FavouriteRepository;
@Service
public class FavouriteServiceImpl implements FavouriteService {
@Autowired
private FavouriteRepository favouriteRepository;
	@Override
	public List<Favourite> getAllFavourite() {
		
		return favouriteRepository.findAll() ;
	}
	@Override
	public void saveFavourite(Favourite favourite) {
		
		favouriteRepository.save(favourite);
	}
	@Override
	public ResponseEntity<Favourite> getFavouriteId(int id) {
		
		Favourite favourite=favouriteRepository.findById(id).orElseThrow();
		System.out.println("oh it worked");
		return ResponseEntity.ok(favourite);
	}
	@Override
	public ResponseEntity<Favourite> updateFavourite(int id, Favourite updateFavourite) {
		
		Favourite favourite=favouriteRepository.findById(id).orElseThrow();
		favourite.setFavouriteFood(updateFavourite.getFavouriteFood());
		Favourite newFavourite=favouriteRepository.save(favourite);
		return ResponseEntity.ok(newFavourite);
	}
	@Override
	public ResponseEntity<Map<String, Boolean>> deleteFavourite(int id) {
		Favourite favourite=favouriteRepository.findById(id).orElseThrow();
		favouriteRepository.delete(favourite);
		Map<String,Boolean>response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
