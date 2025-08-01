# 📋 Calculador de Productos
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![Imagen del Proyecto](readme/img1.jpg)

Aplicación web construida con React y estilizada con Tailwind CSS para gestionar productos. Incluye funcionalidades CRUD, cálculo automático de precios totales y almacenamiento local mediante IndexedDB.

<div align="center">
  <a href="https://youtu.be/HG6uilpRuG4" target="_blank">
    <img src="https://img.shields.io/badge/Ver_demo-red?style=for-the-badge&logo=youtube&logoColor=white&color=FF0000&labelColor=FF0000" alt="Ver demo">
  </a>
</div>

📚 Cosas que aprendí
- IndexedDB: Entendí cómo usar su API nativa y a manejar correctamente transacciones asincrónicas sin errores sutiles.
- Event Loop: Entender su flujo fue clave para resolver un problema con el manejo de las transacciones asíncronas en IndexedDB.
- Componentes UI: Construirlos a mano con Tailwind está bueno pero lleva tiempo. Estoy considerando usar UI kits como React Bootstrap.
- Manejo de estado: `useState` puede volverse complejo en apps medianas. Herramientas como Zustand podrían simplificarlo.
---

## 📁 Estructura del Proyecto

```
react-product-calculator/
├── 📁 src/
│   ├── 📁 adapters/             # Adaptadores de información
│   ├── 📁 components/           # Componentes de React
│   ├── 📁 config/               # Ajustes y constantes
│   ├── 📁 contexts/             # Contextos de React
│   ├── 📁 hooks/                # Customs Hooks de React
│   ├── 📁 logic/                # Lógica de negocio
│   ├── 📁 pages/                # Componentes de páginas (sin react-router aún)
│   ├── 📁 services/             # Servicios de datos
│   ├── app.jsx 
│   └── main.jsx 
└── README.md
```

---

## 🚀 Instalación

### Requisitos previos
- Node.js 18+ 
- npm or yarn

### 1. Clonar este repositorio
```bash
git clone https://github.com/AlexRubenPumari/react-product-calculator.git
cd react-product-calculator
```

### 2. Instalar dependencias
```bash
npm install
```

---

## 🚀 Ejecutando el proyecto

### Inicializar el Servidor de Desarrollo
```bash
npm run dev
```
El servidor se aloja por defecto en: `http://localhost:5137`

### Inicializar el Servidor de Desarrollo con Host Binding
```bash
npm run host
```
El servidor se aloja por defecto en: `http://localhost:5500`
