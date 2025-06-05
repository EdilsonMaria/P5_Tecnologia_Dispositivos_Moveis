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
│   ├── services/                
│   │   └── CursoService.js     # Serviço para operações de cursos 
├── App.js                      # Arquivo principal do aplicativo  
├── index.js                    # Ponto de entrada do React Native   
├── package.json                # Gerenciamento de dependências e scripts  
├── README.md                   # Documentação do projeto  

```

## 📦 Como Executar o Projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/EdilsonMaria/P5_Tecnologia_Dispositivos_Moveis
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd dispositivos-moveis-react-native
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Execute o projeto:
   ```sh
   npm start
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

## Aula03