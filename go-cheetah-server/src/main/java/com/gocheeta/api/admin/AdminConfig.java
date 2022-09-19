package com.gocheeta.api.admin;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AdminConfig {

    @Bean
    CommandLineRunner commandLineRunner(AdminRepository repository){
        return args -> {
            Admin test1 = new Admin(
                    "Jack",
                    "Connor",
                    "jackconnor@gmail.com"
            );
            Admin test2 = new Admin(
                    "harry",
                    "callum",
                    "harrycallum@gmail.com"
            );

            repository.saveAll(List.of(test1, test2));
        };
    }
}
