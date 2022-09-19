package com.gocheeta.api.booking;

import com.gocheeta.api.User.User;

import javax.persistence.*;

@Entity
@Table
public class Booking {

    @Id
    @SequenceGenerator(
            name = "booking_sequence",
            sequenceName = "booking_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "booking_sequence"
    )
    protected Long id;
    protected String startCity;
    protected String endCity;
    protected String driverId;
    protected String customerId;
    protected String createdAt;

    Booking(){}

    public Booking(String startCity, String endCity, String driverId, String customerId, String createdAt) {
        this.startCity = startCity;
        this.endCity = endCity;
        this.driverId = driverId;
        this.customerId = customerId;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStartCity() {
        return startCity;
    }

    public void setStartCity(String startCity) {
        this.startCity = startCity;
    }

    public String getEndCity() {
        return endCity;
    }

    public void setEndCity(String endCity) {
        this.endCity = endCity;
    }

    public String getDriverId() {
        return driverId;
    }

    public void setDriverId(String driverId) {
        this.driverId = driverId;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

}
