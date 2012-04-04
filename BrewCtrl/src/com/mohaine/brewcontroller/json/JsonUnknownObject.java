package com.mohaine.brewcontroller.json;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class JsonUnknownObject {

	private Map<String, Object> properties = new HashMap<String, Object>();

	public void setProperty(String name, Object value) {
		properties.put(name, value);
	}

	public Object getProperty(String name) {
		return properties.get(name);
	}

	public Set<String> getPropertyNames() {
		return properties.keySet();
	}

	public Map<String, Object> getProperties() {
		return properties;
	}

}
