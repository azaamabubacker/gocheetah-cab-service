package com.gocheeta.api.driver;

import com.gocheeta.api.customer.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/drivers")
public class DriverController {

    private final DriverService driverService;


    @Autowired
    public DriverController(DriverService driverService) {
        this.driverService = driverService;
    }

    @GetMapping
    public List<Driver> getDrivers() {
        return driverService.getDrivers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Driver> getById(@PathVariable("id") Long id) {
        return  driverService.findById(id);
    }

    @PostMapping
    public Driver addNewDriver(@RequestBody Driver driver) {
        return driverService.addNewDriver(driver);
    }

}