package com.gocheeta.api.admin;

import com.gocheeta.api.User.User;

import javax.persistence.*;

@Entity
@Table
public class Admin extends User {

    protected String role;

    Admin(){}

    public Admin(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
