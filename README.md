# 🏦 Banco API - Testes Automatizados

Projeto de testes automatizados para API de sistema bancário, desenvolvido com Mocha, Chai e SuperTest.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando os Testes](#executando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes Implementados](#testes-implementados)
- [Relatórios](#relatórios)

## 🎯 Sobre o Projeto

Este projeto contém uma suíte de testes automatizados para validar as funcionalidades de uma API bancária, incluindo:
- Autenticação de usuários
- Transferências bancárias
- Consultas de transações
- Validações de regras de negócio

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Mocha** - Framework de testes
- **Chai** - Biblioteca de assertivas
- **SuperTest** - Testes de APIs HTTP
- **Mochawesome** - Gerador de relatórios HTML
- **dotenv** - Gerenciamento de variáveis de ambiente

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v14 ou superior)
- [Git](https://git-scm.com/)
- Um editor de código como [VS Code](https://code.visualstudio.com/)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GustavoFMorales/banco-api-tests-automatizados.git
```

2. Entre no diretório do projeto:
```bash
cd banco-api-tests-automatizados
```

3. Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração

1. Crie um arquivo `.env` na raiz do projeto:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente no arquivo `.env`:
```env
BASE_URL=http://sua-api.com
EMAIL=seu-email@example.com
SENHA=sua-senha
```

## 🧪 Executando os Testes

Para executar todos os testes:
```bash
npm test
```

Para executar testes específicos:
```bash
npx mocha test/login.test.js
npx mocha test/transferencia.test.js
```

## 📁 Estrutura do Projeto

```
banco-api-tests-automatizados/
│
├── fixtures/                    # Dados de teste (payloads)
│   ├── postLogin.json
│   └── postTransferencia.json
│
├── helpers/                     # Funções auxiliares
│   └── autenticacao.js
│
├── test/                        # Suíte de testes
│   ├── login.test.js
│   └── transferencia.test.js
│
├── mochawesome-report/          # Relatórios de testes
│
├── .env                         # Variáveis de ambiente (não versionado)
├── .gitignore                   # Arquivos ignorados pelo Git
├── package.json                 # Dependências e scripts
└── README.md                    # Documentação
```

## 🧾 Testes Implementados

### Login
- ✅ Validação de login com credenciais válidas
- ✅ Retorno de token de autenticação

### Transferências
- ✅ Criação de transferência com valor acima de R$10,00
- ✅ Validação de transferência com valor abaixo de R$10,00
- ✅ Consulta de transferência específica por ID
- ✅ Listagem de transferências com paginação

## 📊 Relatórios

Após a execução dos testes, um relatório HTML é gerado automaticamente na pasta `mochawesome-report/`.

Para visualizar o relatório:
1. Navegue até a pasta `mochawesome-report/`
2. Abra o arquivo `mochawesome.html` em um navegador

## 👤 Autor

**Gustavo F. Morales**

- GitHub: [@GustavoFMorales](https://github.com/GustavoFMorales)

## 📝 Licença

Este projeto está sob a licença ISC.

---

⭐️ Se este projeto foi útil para você, considere dar uma estrela!
