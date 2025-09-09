
# CineApp

CineApp é um catálogo de filmes moderno feito em React, com autenticação via Firebase e consumo da API do TMDb. O projeto possui tema escuro/claro, login social (Google), busca de filmes e detalhes completos.

## 🚀 Instalação

1. **Clone o repositório:**
	```bash
	git clone <url-do-repo>
	cd cine-app
	```
2. **Instale as dependências:**
	```bash
	npm install
	# ou
	yarn install
	```

## 🔑 Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Ative o método de autenticação por E-mail/Senha e Google em "Authentication > Sign-in method".
3. No menu "Project settings" > "General", copie as credenciais do seu app Firebase.
4. Crie um arquivo `.env` na raiz do projeto e adicione:
	```env
	REACT_APP_FIREBASE_API_KEY=xxxxxxx
	REACT_APP_FIREBASE_AUTH_DOMAIN=xxxxxxx
	REACT_APP_FIREBASE_PROJECT_ID=xxxxxxx
	REACT_APP_FIREBASE_STORAGE_BUCKET=xxxxxxx
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxxxx
	REACT_APP_FIREBASE_APP_ID=xxxxxxx
	```

## 🎬 Como obter a chave da API TMDb

1. Crie uma conta gratuita em [TMDb](https://www.themoviedb.org/).
2. Acesse [TMDb API](https://www.themoviedb.org/settings/api) e solicite uma chave de API (v3 auth).
3. No arquivo `.env`, adicione:
	```env
	REACT_APP_TMDB_API_KEY=xxxxxxx
	```

## ▶️ Como executar o projeto

1. Certifique-se de que o arquivo `.env` está configurado corretamente.
2. Execute o projeto:
	```bash
	npm start
	# ou
	yarn start
	```
3. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

- Para dúvidas ou sugestões, abra uma issue!
- Projeto feito com ☕️ & 💙 usando React, Firebase e TMDb.
