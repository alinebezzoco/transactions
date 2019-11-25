## Transactions Manager 
Uma aplicação em React que gerencia transações bancárias 

### Sobre o projeto 
O projeto tem o objetivo de gerenciar as transações bancárias realizadas pelo usuário e calculando os seus gastos de acordo com as informações de débito e crédito que ele cadastrar.

### Features 
- Site responsivo 
- Cadastro de transações de débito e crédito 
- Exibição do conteúdo em tempo real
- O formulário só é enviado quando o usuário preencher todos os campos 
- UI simples
- Cálculo do total das transações 

### Como rodar o projeto 
- Clone o repositório
- Dê `npm install` para instalar as dependências
- Por fim, dê `npm start` para rodar o projeto

### Como rodar os testes 
- Basta rodar o comando `npm test` no terminal

### Tecnologias utilizadas 
- React 
- CSS Variables 
- Vanilla JS
- Jest 
- Enzyme

### Metodologias utilizadas 
- OOCSS 
- Dumb and Smart Components

### Backend e Banco de Dados
- Firebase 

### API do Projeto
GET `https://transactionmanager-1e50a.firebaseio.com/.json`

### Arquitetura básica do projeto

`├── src
│   ├── assets
│   │   ├── icons
│   │   ├── images
│   ├── ui
│   │   ├── **/*.css
│   ├── libs
│   │   ├── helper
│   │   ├── **/*.css
│   │   ├── **/*.js
│   │   ├── **/*.test.js
│   ├── components
│   │   ├── componentName
│   |   |   |── **/*.js
│   |   |   |── **/*.test.js
│   |   |   |── **/*.css
│   ├── container
│   │   ├── containerName
│   |   |   |── **/*.js
│   |   |   |── **/*.test.js
│   |   |   |── **/*.css
│   ├── pages
│   │   ├── PageName
│   |   |   |── **/*.js
│   |   |   |── **/*.test.js
│   |   |   |── **/*.css
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   └── serviceWorker.js
├── public
├── node_modules
├── .eslintrc.json
├── package-lock.json
├── README.md
├── package.json
├── yarn.lock
└── .gitignore`

