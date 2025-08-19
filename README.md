# Serviço de Disparo de Emails

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

Este projeto é um **Serviço de Disparo de Emails em Lote**, desenvolvido para demonstrar o uso do **Redis** como um *message broker*. Ele foi projetado para gerenciar e processar grandes volumes de envio de emails de forma assíncrona, garantindo performance e escalabilidade.

O projeto foi originalmente construído como parte de um estudo aprofundado sobre bancos de dados NoSQL e sistemas de filas.

---

## Tecnologias e Recursos

Este serviço utiliza uma arquitetura baseada em filas de mensagens para otimizar o fluxo de trabalho. As principais tecnologias e bibliotecas utilizadas são:

* **Node.js**: Ambiente de execução JavaScript para construir o backend do serviço.
* **Redis**: Banco de dados NoSQL utilizado como message broker para gerenciar as filas de mensagens de email de forma eficiente e confiável.
* **Bull**: Uma poderosa biblioteca para manipulação de filas de mensagens com Redis, facilitando o gerenciamento de jobs.
* **AWS SES (Simple Email Service)**: Serviço da AWS para envio de emails, integrado ao sistema para garantir alta entrega e confiabilidade.
* **AWS SDK for JavaScript**: Utilizado para a comunicação com o serviço AWS SES.

---

## Como Executar o Projeto

Siga os passos abaixo para ter o projeto rodando em sua máquina local.

1.  **Clone o repositório** e acesse a pasta do projeto:
    ```bash
    git clone [URL_DO_SEU_REPOSITÓRIO]
    cd nome-do-repositorio
    ```

2.  **Instale as dependências** do Node.js:
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente**:
    Crie um arquivo `.env` na raiz do projeto, usando o `.env.example` como base, e insira suas credenciais da AWS e de conexão com o Redis.

4.  **Inicie a aplicação**:
    ```bash
    npm start
    ```

### Frontend

Este serviço pode ser consumido por uma aplicação frontend. Você pode clonar e executar o projeto de exemplo para testar o disparo de emails.

1.  Clone o repositório do frontend de exemplo:
    ```bash
    git clone [https://github.com/Fernanda-Kipper/membership-frontend](https://github.com/Fernanda-Kipper/membership-frontend)
    ```
2.  Siga as instruções de configuração e execução no `README.md` do repositório do frontend.

---

## Agradecimentos

Este projeto foi inspirado e teve como base o repositório `redis-dba` de **Guilherme Vahl** e também o trabalho de **Fernanda Kipper**. Agradeço a ambos por compartilharem conteúdos tão relevantes, que foram essenciais para o aprendizado e aprimoramento deste projeto.
