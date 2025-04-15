### PROJETO 1º BIMESTRE / # 📱 Pokédex React Native
Criado por:
* Jhonatan Dias Farias
* Vinícius de Paula

Este é um projeto de Pokédex desenvolvido em **React Native**, utilizando a **PokeAPI** para buscar informações de Pokémons. Nele o usuário pode:
- Cadastrar-se com nome, email, senha e dados pessoais.
- Fazer login.
- Pesquisar Pokémons por nome.
- Visualizar detalhes como tipo, altura, peso e experiência.
- Remover Pokémons da lista exibida.

---

## 📂 Estrutura do projeto

```
/src
 ├── screens
 │    ├── Login.js
 │    ├── CadastrarUsuario.js
 │    └── Pokemon.js
 ├── App.js
 └── ...
```

---

## ✨ Funcionalidades

### 📄 Login.js  
Tela inicial onde o usuário:
- Digita e-mail e senha.
- Faz login.
- Pode ir para tela de cadastro.

Valida credenciais salvas com AsyncStorage.

---

### 📄 CadastrarUsuario.js  
Formulário onde o usuário:
- Preenche nome, telefone, CPF, e-mail, senha e curso.
- Salva os dados no AsyncStorage.
- Retorna à tela de login.

---

### 📄 Pokemon.js  
Tela principal da Pokédex:
- Campo de busca por nome de Pokémon.
- Busca dados na PokeAPI.
- Adiciona Pokémon à lista.
- Mostra imagem e dados básicos.
- Botão para mostrar mais detalhes (tipo, altura, peso, XP).
- Remover Pokémon da lista.

---

## 🎨 Estilização  
O projeto foi estilizado para lembrar o visual clássico da Pokédex:
- Fundo vermelho.
- Botões em azul e amarelo.
- Cartões com borda e sombra.
- Imagens e detalhes organizados.

---

## 🚀 Como rodar o projeto

### Pré-requisitos:
- Node.js
- Expo CLI (caso queira rodar via Expo)
- React Native CLI (se rodar direto)

### 📦 Instalar dependências:
```bash
npm install
```

### 📱 Rodar no Expo:
```bash
npx expo start
```

Abra o app Expo Go no celular e escaneie o QR Code.

### 📱 Rodar com React Native CLI:
```bash
npx react-native run-android
# ou
npx react-native run-ios
```

---

## 📚 APIs utilizadas

- 🐱‍👤 [PokeAPI](https://pokeapi.co/)  
REST API gratuita para informações de Pokémons.

- 📦 AsyncStorage  
Armazena dados localmente no dispositivo.

---

## 📸 Prévia do app

| Tela de Login | Cadastro de Usuário | Pokédex |
|:-------------|:-------------------|:---------|
| ![Login](./assets/login.png) | ![Cadastro](./assets/cadastro.png) | ![Pokédex](./assets/pokedex.png) |

*(substituir pelas imagens reais do projeto se quiser)*

---

## 📝 Licença

Projeto acadêmico/experimental.  
Sinta-se à vontade para adaptar e melhorar ✌️
