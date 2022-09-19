package com.gocheeta.api.customer;

import com.gocheeta.api.User.User;

import javax.persistence.*;

@Entity
@Table
public class Customer extends User {

	protected String defaultCity;

	Customer(){}

	public Customer(String firstName, String lastName, String email) {
		this.firstName = firstName;
		this.lastName = lastName;
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
		return "Customer{" +
				"defaultCity='" + defaultCity + '\'' +
				", id=" + id +
				", firstName='" + firstName + '\'' +
				", lastName='" + lastName + '\'' +
				", email='" + email + '\'' +
				", phone='" + phone + '\'' +
				", password='" + password + '\'' +
				", createdAt=" + createdAt +
				'}';
	}
}
