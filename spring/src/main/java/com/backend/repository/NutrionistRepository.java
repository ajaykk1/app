package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.model.NutrionistModel;
@Repository
public interface NutrionistRepository extends JpaRepository <NutrionistModel,Integer> {

}
