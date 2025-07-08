# Teste FaCiência - Frontend

Projeto desenvolvido como teste técnico para a vaga de Desenvolvedor Frontend na **FaCiência Faculdade**.

---

## 🛠 Tecnologias Utilizadas

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)

---

## 📁 Estrutura do Projeto

O projeto utiliza a nova estrutura do **App Router** (`/app`) do Next.js 15, com foco em organização e reutilização de componentes.

### Principais pastas:

```
/app
  ├── layout.tsx       # Layout principal com metadata para SEO
  └── page.tsx         # Página principal (Home)

/components
  ├── Header.tsx
  ├── Footer.tsx
  └── Form.tsx

/styles
  └── *.module.css     # Estilização usando CSS Modules
```

---

## 🧩 Componentes Reutilizáveis

- **Header** – Cabeçalho do site com navegação (se aplicável).
- **Form** – Formulário customizado.
- **Footer** – Rodapé com informações adicionais.

---

## 🔍 SEO

O projeto inclui metadados (`metadata`) no layout para garantir melhor performance em mecanismos de busca:

```ts
export const metadata = {
  title: "Projeto Teste FaCiência | Frontend",
  description: "Projeto desenvolvido em Next.js como parte do teste técnico para a FaCiência Faculdade.",
  icons: {
    icon: "/favicon.ico",
  },
};
```

---

## 🚀 Como Rodar o Projeto

```bash
# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# Acesse em: http://localhost:3000
```

---

## 📌 Observações

- O projeto foi construído com o objetivo de demonstrar boas práticas de organização de componentes, uso do App Router e aplicação de estilos com CSS Modules.
- Todo o código segue um padrão limpo e focado em reusabilidade e manutenção.

---

## 📄 Licença

Este projeto é de uso exclusivo para fins de processo seletivo e demonstração de habilidades técnicas.