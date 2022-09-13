package com.gocheeta.api.driver;

import com.gocheeta.api.User.User;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table
public class Driver extends User {

    protected String vehicleNo;

    Driver(){}

    public Driver(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getVehicleNo() {
        return vehicleNo;
    }

    public void setVehicleNo(String vehicleNo) {
        this.vehicleNo = vehicleNo;
    }
}
