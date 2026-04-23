package com.faculdade.gestaotarefas.model;

import jakarta.persistence.*;
import java.time.LocalDate;

// Diz ao Spring que esta classe vai virar uma tabela no banco de dados
@Entity
public class Tarefa {

    // Define o 'id' como chave primária com numeração automática
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Coluna obrigatória (não pode ser vazia)
    @Column(nullable = false)
    private String titulo;

    // Coluna com limite de 500 caracteres
    @Column(length = 500)
    private String descricao;

    // Guarda o status (ex: Pendente, Em Andamento, Concluída)
    @Column(nullable = false)
    private String status;

    private LocalDate dataVencimento;

    // Construtor vazio (obrigatório para o Spring funcionar)
    public Tarefa() {}

    public Tarefa(String titulo, String descricao, String status, LocalDate dataVencimento) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.dataVencimento = dataVencimento;
    }

    // Getters e Setters (servem para ler e gravar os dados nos campos)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }
    
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public LocalDate getDataVencimento() { return dataVencimento; }
    public void setDataVencimento(LocalDate dataVencimento) { this.dataVencimento = dataVencimento; }
}