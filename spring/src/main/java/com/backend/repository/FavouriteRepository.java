package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.model.Favourite;
@Repository
public interface FavouriteRepository extends JpaRepository<Favourite,Integer> {

}
