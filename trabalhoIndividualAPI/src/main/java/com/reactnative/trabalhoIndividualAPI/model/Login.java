package com.reactnative.trabalhoIndividualAPI.model;

import java.util.Objects;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "login")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Email
	@NotBlank(message = "Preencha o email!")
	@Size(max = 40, message = "Tamanho máximo de {max} caracteres")
	@Column(nullable = false, length = 40)
	@Schema(description = "Email do usuario")
	private String email;

	@NotBlank(message = "Preencha a senha!")
	@Column(nullable = false)
	@Schema(description = "Senha do usuario")
	private String senha;

	public Login() {

	}

	public Login(Long id, String email, String senha) {
		super();
		this.id = id;
		this.email = email;
		this.senha = senha;
	}

	public String getEmail() {
		return email;
	}

	public String getSenha() {
		return senha;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Login other = (Login) obj;
		return Objects.equals(email, other.email) && Objects.equals(id, other.id);
	}

}
