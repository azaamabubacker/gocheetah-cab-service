package com.gocheeta.api.driver;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DriverConfig {

    @Bean
    CommandLineRunner driverCommandLineRunner(DriverRepository repository){
        return args -> {
            Driver test1 = new Driver(
                    "driver1",
                    "driver1@gmail.com"
            );
            Driver test2 = new Driver(
                    "driver2",
                    "driver2@gmail.com"
            );

            repository.saveAll(List.of(test1, test2));
        };
    }
}
