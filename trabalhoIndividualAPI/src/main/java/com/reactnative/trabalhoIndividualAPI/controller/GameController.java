package com.reactnative.trabalhoIndividualAPI.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactnative.trabalhoIndividualAPI.model.Game;
import com.reactnative.trabalhoIndividualAPI.repository.GameRepository;
import com.reactnative.trabalhoIndividualAPI.service.GameService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/games")
public class GameController {

	@Autowired 
	private GameService gameService;
	
	@Autowired
	private GameRepository gameRepository;
	
	@GetMapping
	public ResponseEntity<List<Game>> listar(){
		return ResponseEntity.ok(gameService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Game> buscar(@PathVariable Long id) throws NotFoundException {
		return ResponseEntity.ok(gameService.findById(id));
	}
	
	@PostMapping
	public ResponseEntity<Game> inserir(@Valid @RequestBody Game game) {
		gameService.insert(game);
		return ResponseEntity.ok().body(game);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Game> alterar(@PathVariable Long id, @Valid @RequestBody Game game) {
		if (!gameRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		game.setId(id);
		gameService.change(game);
		return ResponseEntity.ok(game);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletar(@PathVariable Long id) {
		if (!gameRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		gameRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
