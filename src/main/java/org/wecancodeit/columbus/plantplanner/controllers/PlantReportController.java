package org.wecancodeit.columbus.plantplanner.controllers;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.wecancodeit.columbus.plantplanner.data.PlantPlanItemRepository;
import org.wecancodeit.columbus.plantplanner.data.PlantPlanRepository;
import org.wecancodeit.columbus.plantplanner.data.PlantRepository;
import org.wecancodeit.columbus.plantplanner.data.ZipCodeLocalityRepository;

@Controller
public class PlantReportController {

	@Resource
	private PlantRepository plantRepository;

	@Resource
	private PlantPlanRepository plantPlanRepository;

	@Resource
	private PlantPlanItemRepository plantPlanItemRepository;

	@Resource
	private ZipCodeLocalityRepository zipCodeRepo;

	
//	@RequestMapping("/home")
	
}
