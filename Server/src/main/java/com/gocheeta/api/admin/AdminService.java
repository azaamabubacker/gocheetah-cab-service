package com.gocheeta.api.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

	@Autowired
	private final AdminRepository adminRepository;

	public AdminService(AdminRepository adminRepository) {
		this.adminRepository = adminRepository;
	}

	public List<Admin> getAdmins() {
		return adminRepository.findAll();
	}

	public Admin addNewAdmin(Admin admin){
		Optional<Admin> adminByEmail = adminRepository.findAdminByEmail(admin.getEmail());
		if(adminByEmail.isPresent()){
			throw new IllegalStateException("Email exist");
		}
		return adminRepository.save(admin);
	}
}
