# Bewear E-commerce

Um e-commerce de roupas e calçados.

## Principais Funcionalidades

- **Catálogo de Produtos:** Navegue por categorias e veja os detalhes dos produtos.
- **Carrinho de Compras:** Adicione, remova e atualize a quantidade de produtos no seu carrinho.
- **Checkout com Stripe:** Finalize sua compra de forma segura com o Stripe.
- **Autenticação de Usuários:** Crie sua conta e faça login para gerenciar seus pedidos e endereços.
- **Meus Pedidos:** Acompanhe o histórico de suas compras.

## Tecnologias Utilizadas

- **Next.js:** Framework React para renderização no servidor e geração de sites estáticos.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS:** Framework CSS para estilização rápida e customizável.
- **Drizzle ORM:** ORM para interação com o banco de dados.
- **Stripe:** Plataforma de pagamentos online.
- **NextAuth.js:** Para autenticação de usuários.

## Configurações (Setup do Projeto)

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env.local` na raiz do projeto.
   - Adicione as variáveis necessárias (Stripe keys, database URL, etc.).
4. **Rode as migrações do banco de dados:**
   ```bash
   npm run migrate
   ```
5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

A estrutura do projeto segue o padrão de aplicações Next.js com a `App Router`.

```
bewear-bootcamp/
├── public/             # Arquivos estáticos
├── src/
│   ├── app/            # Rotas e páginas da aplicação
│   ├── components/     # Componentes reutilizáveis
│   ├── actions/        # Server Actions
│   ├── db/             # Configuração do banco e schema
│   ├── helpers/        # Funções auxiliares
│   ├── hooks/          # Hooks customizados
│   ├── lib/            # Configurações de bibliotecas (Auth, etc)
│   └── providers/      # Provedores de contexto
├── .env.local          # Variáveis de ambiente (não versionado)
├── next.config.ts      # Configurações do Next.js
└── package.json        # Dependências e scripts
```

## Deploy

O projeto está disponível para visualização em:

[bewear-ecommerce-fsw.vercel.app](https://bewear-ecommerce-fsw.vercel.app)
