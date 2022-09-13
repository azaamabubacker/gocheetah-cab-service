package com.gocheeta.api.driver;

import com.gocheeta.api.customer.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriverService {

	@Autowired
	private final DriverRepository driverRepository;

	public DriverService(DriverRepository driverRepository) {
		this.driverRepository = driverRepository;
	}

	public List<Driver> getDrivers() {
		return driverRepository.findAll();
	}

	public ResponseEntity<Driver> findById(Long id) {
		return driverRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	public Driver addNewDriver(Driver driver){
		Optional<Driver> driverByEmail = driverRepository.findAdminByEmail(driver.getEmail());
		if(driverByEmail.isPresent()){
			throw new IllegalStateException("Email exist");
		}
		return driverRepository.save(driver);
	}
}
