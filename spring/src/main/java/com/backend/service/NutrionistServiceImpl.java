package com.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.model.NutrionistModel;
import com.backend.repository.NutrionistRepository;
@Service
public class NutrionistServiceImpl implements NutrionistService {
	@Autowired
	NutrionistRepository nutrionistRepository;
	@Override
	public List<NutrionistModel> getAllNutrionist() {
		return nutrionistRepository.findAll();
		
	}
	@Override
	public NutrionistModel addAllNutrionist(NutrionistModel nutrionistModel) {
		
		return nutrionistRepository.save(nutrionistModel);
	}

}
