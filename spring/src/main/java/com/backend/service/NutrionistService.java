package com.backend.service;

import java.util.List;

import com.backend.model.NutrionistModel;

public interface NutrionistService {
List<NutrionistModel>getAllNutrionist();
NutrionistModel addAllNutrionist(NutrionistModel nutrionistModel);

}
