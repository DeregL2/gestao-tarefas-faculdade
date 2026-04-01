# 📝 Sistema de Gestão de Tarefas (Fullstack)

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![H2 Database](https://img.shields.io/badge/H2_Database-4479A1?style=for-the-badge&logo=database&logoColor=white)

Este é um projeto Fullstack desenvolvido como trabalho acadêmico. Trata-se de um sistema web completo para gerenciamento de tarefas (To-Do List), permitindo a criação, visualização, edição e exclusão de atividades diárias de forma intuitiva e rápida.

O projeto utiliza uma arquitetura separada, com uma API RESTful no Backend e uma interface reativa no Frontend.

---

## ✨ Funcionalidades (CRUD Completo)

- **Cadastrar Tarefa:** Criação de novas atividades informando Título, Descrição, Status e Data de Vencimento.
- **Listar Tarefas:** Visualização de todas as tarefas cadastradas diretamente na tela inicial com indicadores visuais de status.
- **Editar Tarefa:** Atualização rápida dos dados e alteração do status (Pendente, Em Andamento, Concluída).
- **Excluir Tarefa:** Remoção de tarefas concluídas ou canceladas do banco de dados.

---

## 🛠️ Tecnologias Utilizadas

### Backend (API REST)
* **Java 21**
* **Spring Boot 3** (Web, Data JPA)
* **H2 Database** (Banco de dados em memória, ideal para testes e desenvolvimento ágil)
* **Maven** (Gerenciador de dependências)

### Frontend (Interface de Usuário)
* **React**
* **Vite** (Build tool ultra-rápida)
* **CSS3** (Estilização moderna com flexbox, transições e responsividade)

---

## 🚀 Como executar o projeto na sua máquina

Para rodar este projeto, você precisará ter o **Java (JDK 17 ou superior)** e o **Node.js** instalados na sua máquina.

### 1. Rodando o Backend (Java / Spring Boot)
Abra o terminal na pasta raiz do projeto (`gestaotarefas`) e execute:

**No Windows:**
```bash
.\mvnw spring-boot:run
