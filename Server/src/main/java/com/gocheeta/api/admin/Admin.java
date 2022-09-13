package com.gocheeta.api.admin;

import com.gocheeta.api.User.User;

import javax.persistence.*;

@Entity
@Table
public class Admin extends User {

    protected String role;

    Admin(){}

    public Admin(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
