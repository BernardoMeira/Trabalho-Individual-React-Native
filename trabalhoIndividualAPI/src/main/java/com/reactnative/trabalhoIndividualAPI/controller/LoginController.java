package com.reactnative.trabalhoIndividualAPI.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactnative.trabalhoIndividualAPI.model.Login;
import com.reactnative.trabalhoIndividualAPI.repository.LoginRepository;
import com.reactnative.trabalhoIndividualAPI.service.LoginService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@Autowired
	private LoginRepository loginRepository;

//	@GetMapping("/{email}")
//	public ResponseEntity<Login> buscarEmail(@PathVariable String email) throws NotFoundException {
//		return ResponseEntity.ok(loginService.findByEmail(email));
//	}

	@PostMapping
	public ResponseEntity<String> login(@RequestBody Login login) {
		String valid = loginService.verifyLogin(login);
		if (valid != null) {
			return ResponseEntity.ok(valid);
		} else {
			System.out.println("Email não encontrado: " + login.getEmail());
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha invalidos!");
		}
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<String> cadastrar(@Valid @RequestBody Login login) {
		Optional<Login> loginBd = loginRepository.findByEmail(login.getEmail());
		if (loginBd.isPresent()) {
			return ResponseEntity.badRequest().body("Email já cadastrado!");
		}

		loginService.insert(login);
		return ResponseEntity.ok("Cadastrado com sucesso!");
	}
}
