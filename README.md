# AngularJS SPA [![Build Status](https://travis-ci.org/mauroao/angular.js.svg?branch=master)](https://travis-ci.org/mauroao/angular.js)

![AngularJS SPA](https://raw.githubusercontent.com/mauroao/angular.js/master/docs/diagrama.draw.io.png)

## Introdução

Este repositório contém uma SPA (Single Page Application) escrita com o framework AngularJS.
A aplicação contém um cadastro de contatos, onde é possível incluir e excluir contatos com nome, telefone, data de inclusão e operadora.
O projeto foi baseado no curso de Angular JS do [Rodrigo Branas](https://www.youtube.com/user/rodrigobranas).

O objetivo é o de manter um histórico do aprendizado que tive com esse curso, bem como o exercício no uso de diversas ferramentas de desenvolvimento open source, que adicionei ao projeto, como NodeJS, Npm, Grunt, live-server, angularjs,  etc...

## Pré requisitos

É necessário ter as ferramentas abaixo:

* [Node.js](https://nodejs.org/en/);
* [Grunt](https://gruntjs.com/)
* Um Webserver para rodar a página principal, como o [http-server](https://www.npmjs.com/package/http-server) ou [live-server](https://www.npmjs.com/package/live-server);

## Como instalar

1. `git clone git@github.com:mauroao/angular.js.git` - clonar do github;
2. `cd angular.js` - entrar no diretório da aplicacão;
3. `npm install` - instalar os pacotes npm;

## Como executar

Executar um webserver como o [http-server](https://www.npmjs.com/package/http-server) ou [live-server](https://www.npmjs.com/package/live-server);

Logo em seguida, abrir a página no navegador. Exemplo:

`http://localhost:8080/front-end`

## Deploy

* `grunt prod` - para gerar a distribuicão;

 Os arquivos do deploy serão compilados para a pasta `docs/` (diretório padrão para publicacão no [github.io](https://github.io)).

## Back-end

Este projeto consome uma API REST para ler e gravar os contatos. Todos os projetos abaixo fornecem uma API compatível e podem ser utilizados como origem dos dados:

* ExpressJS - [github.com/mauroao/expressjs](https://github.com/mauroao/expressjs)
* ASP.NET MVC Web API - [github.com/mauroao/asp-net-web-api](https://github.com/mauroao/asp-net-web-api)
* Java Jersey RESTful API - [github.com/mauroao/java-jersey-rest-api](https://github.com/mauroao/java-jersey-rest-api)

## On-Line DEMO

* [Lista Telefônica](https://mauroao.github.io/angular.js/);
