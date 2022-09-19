package com.gocheeta.api.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

	@Autowired
	private final BookingRepository bookingRepository;

	public BookingService(BookingRepository bookingRepository) {
		this.bookingRepository = bookingRepository;
	}

	public List<Booking> getBookings() {
		return bookingRepository.findAll();
	}

	public Booking addNewBooking(Booking booking){
		return bookingRepository.save(booking);
	}
}
