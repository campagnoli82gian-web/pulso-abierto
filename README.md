# Pulso Abierto

Aplicación web para consultar los precios actuales de las principales criptomonedas, buscar y filtrar resultados, consultar información individual y administrar favoritos.

## 🚀 Demo online

**[Abrir Pulso Abierto](https://pulso-abierto-sepia.vercel.app/)**

## 🛠️ Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- React Router DOM
- Zustand
- Zod
- Vitest
- Testing Library
- ESLint

## ✨ Funcionalidades

- Consulta de precios de Bitcoin, Ethereum y Solana.
- Obtención de precios mediante la API de CoinGecko.
- Búsqueda de criptomonedas por nombre o símbolo.
- Filtrado de resultados.
- Visualización de detalles de cada criptomoneda.
- Agregar y quitar criptomonedas de favoritos.
- Persistencia de favoritos.
- Estados de carga, error y resultados.
- Diseño adaptable a dispositivos móviles.

## 📁 Estructura del proyecto

```text
src/
├── assets/
├── components/
│   ├── CryptoCard.tsx
│   ├── CryptoList.tsx
│   ├── SearchForm.tsx
│   └── StatusMessage.tsx
├── pages/
│   ├── Home.tsx
│   └── CryptoDetail.tsx
├── services/
│   └── cryptoService.ts
├── store/
│   └── favoritesStore.ts
├── test/
│   ├── StatusMessage.test.tsx
│   ├── cryptoService.test.ts
│   └── favoritesStore.test.ts
└── types/
    └── crypto.ts
```

## 💻 Instalación y ejecución

Requisitos:
- Node.js
- npm

Clonar el repositorio:

```bash
git clone https://github.com/campagnoli82gian-web/pulso-abierto.git
```

Ingresar a la carpeta:

```bash
cd pulso-abierto
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

## 🧪 Comandos disponibles

Ejecutar las pruebas:

```bash
npm run test
```

Compilar para producción:

```bash
npm run build
```

Ejecutar ESLint:

```bash
npm run lint
```

Previsualizar la compilación:

```bash
npm run preview
```

## 🔌 API

Los precios se consultan mediante la API pública de CoinGecko:

```text
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd
```

Los valores se muestran en dólares estadounidenses (USD).

## 🌐 Despliegue

La aplicación está desplegada en Vercel:

**https://pulso-abierto-sepia.vercel.app/**

El repositorio de código fuente se encuentra en GitHub:

**https://github.com/campagnoli82gian-web/pulso-abierto**

## ✅ Verificación final

Fecha de verificación: 24/11/2026.

| Verificación | Resultado |
|---|---|
| Pruebas automatizadas | 6 de 6 aprobadas |
| Build de producción | Correcto |
| ESLint | Sin errores |
| Listado de criptomonedas | Verificado |
| Vista de detalle | Verificada |
| Favoritos | Verificados |
| Persistencia de favoritos | Verificada |
| Diseño responsive | Verificado |
| Despliegue en Vercel | Correcto |
| Consulta de API en producción | Correcta |

## 👨‍💻 Autor

Proyecto desarrollado por **Gian Campagnoli**.

