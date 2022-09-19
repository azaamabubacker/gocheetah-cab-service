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
                    "James",
                    "Smith",
                    "jamessmith@gmail.com"
            );
            Driver test2 = new Driver(
                    "Oliver",
                    "Jake",
                    "oliverjake@gmail.com"
            );

            repository.saveAll(List.of(test1, test2));
        };
    }
}
