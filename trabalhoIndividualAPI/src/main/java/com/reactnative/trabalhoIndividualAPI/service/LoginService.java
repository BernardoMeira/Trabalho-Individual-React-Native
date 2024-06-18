package com.reactnative.trabalhoIndividualAPI.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reactnative.trabalhoIndividualAPI.exception.NotFoundException;
import com.reactnative.trabalhoIndividualAPI.model.Login;
import com.reactnative.trabalhoIndividualAPI.repository.LoginRepository;

import jakarta.transaction.Transactional;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;

	public List<Login> findAll() {
		List<Login> logins = loginRepository.findAll();

		return logins;
	}

	public Login findById(long id) throws NotFoundException {
		Optional<Login> loginOpt = loginRepository.findById(id);
		if (loginOpt.isEmpty()) {
			throw new NotFoundException();
		}
		return loginOpt.get();
	}

	public Login findByEmail(String email) throws NotFoundException {
		Optional<Login> loginOpt = loginRepository.findByEmail(email);
		if (loginOpt.isEmpty()) {
			throw new NotFoundException();
		}
		return loginOpt.get();
	}

	public String verifyLogin(Login login) {
		Optional<Login> loginOpt = loginRepository.findByEmail(login.getEmail());
		if (loginOpt.isPresent() && ((login.getSenha()).equals(loginOpt.get().getSenha()))) {
			System.out.println("Login Realizado: " + login.getEmail());
			return "Login com sucesso";
		}
		return null;
	}

	@Transactional
	public void insert(Login login) {
		System.out.println("Cadastro Realizado: " + login.getEmail());
		loginRepository.save(login);
	}
}
