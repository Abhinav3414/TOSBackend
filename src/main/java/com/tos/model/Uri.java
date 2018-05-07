package com.tos.model;

public class Uri {
	
	private String appBaseUrl;
	private String baseResourceUrl;
	private String baseResourceUserUrl;
	private String tokenApiUrl;
	private String propertyUrl;

	public Uri() {
	}
	
	public Uri(String frontendBaseUrl,String baseResourceUrl, String baseResourceUserUrl, String tokenApiUrl, String propertyUrl) {
		super();
		this.appBaseUrl = frontendBaseUrl;
		this.baseResourceUrl = baseResourceUrl;
		this.baseResourceUserUrl = baseResourceUserUrl;
		this.tokenApiUrl = tokenApiUrl;
		this.propertyUrl = propertyUrl;
	}

	public String getBaseResourceUrl() {
		return baseResourceUrl;
	}
	
	public String getFrontendBaseUrl() {
		return appBaseUrl;
	}

	public void setFrontendBaseUrl(String frontendBaseUrl) {
		this.appBaseUrl = frontendBaseUrl;
	}

	public void setBaseResourceUrl(String baseResourceUrl) {
		this.baseResourceUrl = baseResourceUrl;
	}

	public String getBaseResourceUserUrl() {
		return baseResourceUserUrl;
	}

	public void setBaseResourceUserUrl(String baseResourceUserUrl) {
		this.baseResourceUserUrl = baseResourceUserUrl;
	}

	public String getTokenApiUrl() {
		return tokenApiUrl;
	}

	public void setTokenApiUrl(String tokenApiUrl) {
		this.tokenApiUrl = tokenApiUrl;
	}

	public String getAppBaseUrl() {
		return appBaseUrl;
	}

	public void setAppBaseUrl(String appBaseUrl) {
		this.appBaseUrl = appBaseUrl;
	}

	public String getPropertyUrl() {
		return propertyUrl;
	}

	public void setPropertyUrl(String propertyUrl) {
		this.propertyUrl = propertyUrl;
	}
	
	
	
}