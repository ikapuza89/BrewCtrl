package com.mohaine.brewcontroller.json;

public abstract class JsonObjectPropertyHandler<T, F> {
	public abstract String getName();

	public abstract F getValue(T object);

	public abstract void setValue(T object, F value);

	public Class<F> getExpectedType() {
		return null;
	}

	public boolean isJson() {
		return false;
	}

}
