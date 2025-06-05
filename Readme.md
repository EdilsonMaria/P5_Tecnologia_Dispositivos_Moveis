# 📱 Dispositivos Móveis com React Native

Este repositório contém o código das aulas da disciplina de **Dispositivos Móveis**, utilizando **React Native**.

## 📌 Sobre a Disciplina
A disciplina de **Dispositivos Móveis** tem como objetivo ensinar o desenvolvimento de aplicativos para dispositivos móveis utilizando **React Native**, explorando conceitos como:
- Configuração do ambiente de desenvolvimento
- Componentes e estilização
- Navegação entre telas
- Consumo de APIs
- Gerenciamento de estado
- Armazenamento local

## 🛠️ Descrição do Projeto da Aula03
Este projeto consiste no desenvolvimento de um aplicativo mobile, compatível com iOS e Android, utilizando as tecnologias React Native e Expo, que facilitam a criação de aplicativos de forma rápida e eficiente.

O aplicativo permite que usuários realizem o cadastro e login seguro, utilizando o serviço de autenticação do Firebase. Além disso, conta com uma funcionalidade para cadastrar, listar e armazenar cursos, onde os dados são salvos e sincronizados em tempo real no Firebase Database (Cloud Firestore).

O projeto também faz uso de bibliotecas como React Navigation, para navegação entre as telas, e integra práticas modernas de desenvolvimento mobile, priorizando uma interface simples, intuitiva e responsiva.

## 🚀 Tecnologias Utilizadas
- **React Native** Framework para criar aplicativos móveis nativos usando JavaScript e React.
- **Expo** Plataforma que facilita o desenvolvimento, build e deploy de apps em React Native.
- **Firebase** Backend na nuvem com serviços como autenticação, banco de dados e hospedagem.
- **Firebase Database** Banco de dados em tempo real na nuvem, que armazena e sincroniza dados entre os usuários e dispositivos instantaneamente.
- **React Navigation** Biblioteca de navegação entre telas em aplicativos React Native.
- **Authenticator** Ferramenta para autenticação de usuários, geralmente vinculada a serviços como AWS Amplify ou Firebase.

## 📂 Estrutura do Repositório da Aula03
```
/  
├── src/  
│   ├── config/                  
│   │   └── firebaseConfig.js   # Configuração do Firebase Database 
│   ├── context/                
│   │   └── AuthContext.js      # Contexto de Firebase Autenticação  
│   ├── navigation/              
│   │   └── AppNavigation.js    # Definição das rotas de navegação  
│   ├── screens/                 
│   │   ├── LoginScreen.js      # Tela de login  
│   │   ├── RegisterScreen.js   # Tela de cadastro  
│   │   ├── HomeScreen.js       # Tela inicial  
│   │   ├── DetailsScreen.js    # Tela de detalhes do curso  
│   │   ├── CursoFormScreen.js  # Tela de cadastro/edição de cursos  
│   │   └── ProfileScreen.js    # Tela de perfil do usuário  
│   └── services/                
│       └── CursoService.js     # Serviço para operações de cursos 
├── App.js                      # Arquivo principal do aplicativo  
├── index.js                    # Ponto de entrada do React Native   
├── package.json                # Gerenciamento de dependências e scripts  
├── README.md                   # Documentação do projeto  

```
## 🔥 Funcionalidades Principais

- 🔐 **Autenticação de Usuários (Login, Cadastro e Logout)**
- 🏠 **Listagem de Cursos**
- ➕ **Adição e Edição de Cursos**
- 🗑️ **Exclusão de Cursos**
- 📄 **Visualização de Detalhes do Curso**
- 👤 **Perfil do Usuário**

---

## 🖥️ Telas do Aplicativo

### 🔐 **LoginScreen.js — Tela de Login**

- **Funcionalidade principal:** Autenticação de usuários com Firebase.
- **O que faz:**
  - Permite que o usuário insira **email** e **senha**.
  - Ao clicar em **"Entrar"**, executa `handleLogin()`:
    - Faz autenticação via `signInWithEmailAndPassword` do Firebase.
    - Se correto, navega para a tela **Main** (Home e Perfil).
    - Se incorreto, exibe alerta de erro.
  - Opção para navegar para a tela de cadastro (**"Cadastre-se"**).
  - **Botões sociais (Google e GitHub)** são apenas visuais.

---

### 📝 **RegisterScreen.js — Tela de Cadastro**

- **Funcionalidade principal:** Permite que novos usuários criem uma conta.
- **O que faz:**
  - Inputs para **email** e **senha**.
  - Botão **“Cadastrar”**:
    - Cria um novo usuário via `createUserWithEmailAndPassword` do Firebase.
    - Se bem-sucedido:
      - Exibe alerta de sucesso.
      - Redireciona para a tela **Main**.
    - Se falhar:
      - Mostra alerta com o erro (email inválido, senha fraca, etc.).
  - Botão **“Voltar para o Login”** para retornar à tela de login.
  
---

### 🏠 **HomeScreen.js — Tela Inicial (Lista de Cursos)**

- **Funcionalidade principal:** Listagem, adição e exclusão de cursos.
- **O que faz:**
  - Ao abrir, carrega os cursos cadastrados no Firestore vinculados ao usuário logado (`user.uid`).
  - Exibe os cursos usando uma **FlatList** com:
    - **Nome e descrição** do curso.
    - Clique no item leva para a tela de detalhes (**DatailsScreen**).
    - Botão de lixeira 🗑️ permite excluir o curso (com confirmação).
  - Botão **"Adicionar Curso"** leva para a tela **CursoFormScreen**.

---

### 📄 **DatailsScreen.js — Tela de Detalhes do Curso**

- **Funcionalidade principal:** Exibir detalhes de um curso específico.
- **O que faz:**
  - Recebe os dados via **`route.params`**:
    - `name` (nome)
    - `description` (descrição)
  - Mostra:
    - **Nome do curso**
    - **Descrição**

---

### 📝 **CursoFormScreen.js — Tela de Adição/Edição de Curso**

- **Funcionalidade principal:** Criar ou editar um curso.
- **O que faz:**
  - **Modo Edição:** Se recebeu `itemId` via parâmetro:
    - Busca os dados do curso no Firestore.
    - Preenche os campos do formulário.
    - Salva atualizando o curso com `atualizarCurso()`.
  - **Modo Criação:** Se não recebeu `itemId`:
    - Cria um novo curso no Firestore com `adicionarCurso()`.
  - Valida se os campos estão preenchidos.
  - Exibe alertas de sucesso ou erro.

---

### 👤 **ProfileScreen.js — Tela de Perfil**

- **Funcionalidade principal:** Exibir informações do usuário e logout.
- **O que faz:**
  - Mostra:
    - Título **“👤 Meu Perfil”**.
    - Email do usuário logado.
  - Botão **“Sair”**:
    - Executa `handleLogout()`.
    - Faz logout no Firebase e retorna para a tela **Login** (`navigation.replace('Login')`).


---

## 🔗 Relação entre as Telas

- **Login → Main (Home + Profile)** após autenticação bem-sucedida.
- Dentro de **Main**:
  - Aba **Home**:
    - Acesso à tela de **Detalhes do Curso (Datails)**.
    - Acesso à tela de **Formulário (CursoForm)** para adicionar ou editar cursos.
  - Aba **Profile**:
    - Visualiza email e faz logout.
- **Register → Main** após cadastro bem-sucedido ou **volta para Login**.

**Fluxo de navegação simplificado:**

```
Login → Main (Tabs: Home | Profile)
 ↳ Home → Detalhes (Datails)
 ↳ Home → CursoForm (Adicionar/Editar)
 ↳ Profile → Logout → Login
Register → Main ou → Login
```

---

## 🔐 Integração com Firebase Authentication

- Usado para:
  - **Login**
  - **Cadastro**
  - **Logout**
- Métodos utilizados:
  - `signInWithEmailAndPassword()`
  - `createUserWithEmailAndPassword()`
  - `signOut()`
- Garante que cada usuário só veja seus próprios dados (cursos).

---

## 💾 Integração com Firebase Firestore (Database)

- Cada usuário possui uma coleção de cursos associada ao seu `user.uid`.
- Operações realizadas:
  - **Listar Cursos:** Função `getCursos()`.
  - **Adicionar Curso:** Função `adicionarCurso()`.
  - **Editar Curso:** Função `atualizarCurso()`.
  - **Deletar Curso:** Função `deletarCurso()`.

---

## 📦 Estrutura de Navegação (Baseada em `AppNavigation.js`)

- **Stack Navigator:**
  - `Login`
  - `Register`
  - `Main` (Tabs)
  - `Datails`
  - `CursoForm`
- **Tab Navigator dentro de Main:**
  - `Home`
  - `Profile`

---

## 📦 Como Executar o Projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/EdilsonMaria/P5_Tecnologia_Dispositivos_Moveis
   ```
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure o Firebase:
   - Crie um projeto no [Firebase](https://console.firebase.google.com/).
   - Ative **Authentication (Email/Senha)**.
   - Crie um **Firestore Database**.
   - Crie um arquivo `.env` ou `firebaseConfig.js` com suas credenciais.

4. Execute o projeto:
   ```bash
   npx expo start
   ```

## 📖 Referências
- [Documentação do React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)

---

## 🎓 Desenvolvido para a disciplina de Dispositivos Móveis 
## Aula01 
### Exercício 1
![Exercício 1](img/aula1_exercicio1.jpeg)
### Exercício 2
![Exercício 2](img/aula1_exercicio2.jpeg)

---

## Aula02 
### Exercício 1
![Exercício 1](img/aula2_exercicio1.jpeg)

---