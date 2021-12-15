package com.backend.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.backend.model.Favourite;

public interface FavouriteService {
List<Favourite>getAllFavourite();
void saveFavourite(Favourite favourite);
ResponseEntity<Favourite>getFavouriteId(int id);
ResponseEntity<Favourite>updateFavourite(int id,Favourite updateFavourite);
ResponseEntity<Map<String,Boolean>>deleteFavourite(int id);
}
