package com.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Favourite_Foods")
public class Favourite {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	//@Column
	private String favouriteFood;
	Favourite(){
		
	}
	
	public Favourite(int id, String favouriteFood) {
		super();
		this.id = id;
		this.favouriteFood = favouriteFood;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFavouriteFood() {
		return favouriteFood;
	}
	public void setFavouriteFood(String favouriteFood) {
		this.favouriteFood = favouriteFood;
	}
	
}
