package com.gocheeta.api.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;


    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public List<Booking> getBookings() {
        return bookingService.getBookings();
    }

    @PostMapping
    public Booking addNewBooking(@RequestBody Booking booking) {
        return bookingService.addNewBooking(booking);
    }

}