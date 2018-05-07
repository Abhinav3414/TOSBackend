package com.tos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tos.model.Uri;
import com.tos.utility.ApplicationProperties;

@RestController
@RequestMapping("/properties")
public class PropertyUtilityController {

	@Autowired
	private ApplicationProperties applicationProperties;

	@GetMapping("/uri")
	public Uri getUris() {
		Uri uri = new Uri(applicationProperties.getAppBaseUrl(), applicationProperties.getBaseResourceUrl(),
				applicationProperties.getBaseResourceUsersUrl(), applicationProperties.getTokenApiUrl(),
				applicationProperties.getPropertyUrl());
		return uri;
	}

}
