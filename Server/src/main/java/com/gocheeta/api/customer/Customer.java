package com.gocheeta.api.customer;

import com.gocheeta.api.User.User;

import javax.persistence.*;

@Entity
@Table
public class Customer extends User {

	protected String defaultCity;

	Customer(){}

	public Customer(String name, String email) {
		this.name = name;
		this.email = email;
	}

	public String getDefaultCity() {
		return defaultCity;
	}

	public void setDefaultCity(String defaultCity) {
		this.defaultCity = defaultCity;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", email=" + email + "]";
	}

}
