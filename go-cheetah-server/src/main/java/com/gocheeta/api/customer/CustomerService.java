package com.gocheeta.api.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.*;

@Service
public class CustomerService {


	private final CustomerRepository customerRepository;

	public CustomerService(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	public List<Customer> getCustomers() {
		return customerRepository.findAll();
	}

	public ResponseEntity<Customer> findById(Long id) {
		return customerRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	public Customer addNewCustomer(Customer customer){
		Optional<Customer> customerByEmail = customerRepository.findCustomerByEmail(customer.getEmail());
		if(customerByEmail.isPresent()){
			throw new IllegalStateException("Email exist");
		}

		return customerRepository.save(customer);
	}

	public boolean deleteCustomer(Long id) {
		Customer customer = customerRepository.findById(id).get();
		customerRepository.delete(customer);
		return false;
	}

	public Customer updateCustomer(Long id, Customer customer) {
//	Customer customer = customerRepository.findById(id).get();
	customer.setEmail(customer.getEmail());
	customer.setFirstName(customer.getFirstName());
	customer.setLastName(customer.getLastName());
	customer.setPhone(customer.getPhone());
		return null;
	}
}
