<h1 align="center">Lama</h1>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vitorquadros/lama?color=darkblue&style=plastic">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/vitorquadros/lama?color=darkblue&style=plastic">
  <img alt="License" src="https://img.shields.io/github/license/vitorquadros/lama?color=darkblue&style=plastic"> 

</p>

> <p align="center">Creative Thoughts Agency. Made in the Next.js 14 Complete Course 2024 by <a href="https://www.youtube.com/@LamaDev">Lama Dev</a>.</p>

<h2 align="center">Content</h2>

<p align="center">
<a href="#rocket-features">Features</a>
·
<a href="#gear-tecnologias">Technologies/Tools</a>
·
<a href="#question-como-testar">How to Test</a>
·
<a href="#copyright-licença">License</a>
</p>

# :rocket: Features

- item

- item

# :gear: Technologies

### API

- [Express](https://github.com/expressjs/express)
- [PostgreSQL](https://github.com/postgres/postgres)
- [TypeORM](https://github.com/typeorm/typeorm)
- [BcryptJS](https://github.com/dcodeIO/bcrypt.js/)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [UUID](https://github.com/uuidjs/uuid)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Express's CORS](https://github.com/expressjs/cors)
- [Nodemailer](https://github.com/nodemailer/nodemailer)
- [Multer](https://github.com/expressjs/multer)

### Frontend

- [Vite](https://github.com/vitejs/vite)
- [ReactJS](https://github.com/facebook/react)
- [React Router DOM](https://github.com/remix-run/react-router)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://github.com/styled-components/styled-components)
- [React Hook Form](https://github.com/react-hook-form/react-hook-form)
- [Yup](https://github.com/jquense/yup)
- [Moment](https://github.com/moment/moment)

# :question: How to Test

### **Locally**

Para ambas as aplicações tenha certeza que você tem o [node](https://github.com/nodejs/node) e o [npm](https://github.com/npm/npm) instalados na sua máquina

### API

1. Crie um arquivo .env na raiz do projeto (api) e preencha as variáveis de ambiente listadas no arquivo [.github/.env.sample](.github/.env.sample)
2. Instale as dependencias da aplicação com `npm install`
3. Se estiver usando [docker](https://github.com/docker/compose) e [docker-compose](https://github.com/docker), substitua as configurações em [docker-compose.yml](./api/docker-compose.yml) antes de criar o container
4. Rode as migrations com `npm run typeorm migration:run` para criar as tabelas no banco de dados
5. Inicie o servidor com `npm run dev`

### Frontend

1. Instale as dependencias da aplicação com `npm install`
2. Inicie o servidor com `npm run dev`

# :copyright: Licença

This project is under the [MIT license](./LICENSE).

<p align="center">
<sub>Made with ❤︎ by <a href="https://github.com/vitorquadros">Vitor Quadros</a></sub>
</p>
