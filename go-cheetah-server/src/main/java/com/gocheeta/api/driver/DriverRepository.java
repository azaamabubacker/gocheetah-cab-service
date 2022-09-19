package com.gocheeta.api.driver;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Long>  {
    Optional<Driver> findAdminByEmail(String email);
}
