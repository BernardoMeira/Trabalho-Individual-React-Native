package com.reactnative.trabalhoIndividualAPI.model;

import java.util.Objects;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "games")
public class Game {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Schema(description = "Nome do jogo")
	private String nome;

	@Schema(description = "Descrição do jogo")
	private String descricao;

	@Schema(description = "Valor do jogo")
	private Double valor;

	@Schema(description = "Url da imagem do jogo")
	private String imagemUrl;

	@Schema(description = "Url do jogo")
	private String jogoUrl;

	@Schema(description = "Jogo recomendado")
	private Boolean recomendado;

	public Game() {

	}

	public Game(Long id, String nome, String descricao, Double valor, String imagemUrl, String jogoUrl,
			Boolean recomendado) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.valor = valor;
		this.imagemUrl = imagemUrl;
		this.jogoUrl = jogoUrl;
		this.recomendado = recomendado;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public Double getValor() {
		return valor;
	}

	public String getImagemUrl() {
		return imagemUrl;
	}

	public String getJogoUrl() {
		return jogoUrl;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public void setImagemUrl(String imagemUrl) {
		this.imagemUrl = imagemUrl;
	}

	public void setJogoUrl(String jogoUrl) {
		this.jogoUrl = jogoUrl;
	}

	public Boolean getRecomendado() {
		return recomendado;
	}

	public void setRecomendado(Boolean recomendado) {
		this.recomendado = recomendado;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Game other = (Game) obj;
		return Objects.equals(id, other.id);
	}
}
