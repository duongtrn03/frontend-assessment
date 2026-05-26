# Frontend Assessment

## 🪑 Overview

**Frontend Assessment** is a React(Vite) project built to solve the frontend challenges provided by Mindarc

- Responsive design across all devices
- Component-based architecture with reusable UI elements
- Dynamic product data loaded from JSON

## 🚀 Demo

🔗 Live Demo: https://frontend-assessment.duongtd273.workers.dev/

## 🛒 Excercise 1

- Build a responsive page based on the provided Figma designs.
- Match the designs exactly.
- Read data from `.json` and display it on the page.
- Design: [Figma Design](https://www.figma.com/design/OGS3UnHSQ22l0rXXsY7wnU/FE-Test?node-id=1-960&t=trrhG4X5tcU0klWP-0)
- Component used:
  - HeroBanner
  - ProductCollection

🔗 Live Demo Excercise 1: https://frontend-assessment.duongtd273.workers.dev/exercise1

## 📑 Excercise 2

- Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.
- Display data in tabs on desktop.
- Display data in an accordion on mobile.
- Only 1 accordion/tab should be open at a time.
- Open the first accordion/tab on load.
- If the open accordion is selected, close it.
- Component used:
  - AccordionList
  - TabList

🔗 Live Demo Excercise 2: https://frontend-assessment.duongtd273.workers.dev/exercise2

## 🛠️ Technologies Used

- React 19
- Vite 8
- Node 20+
- TailwindCSS V3 / SCSS
- React Router
- Deployment: Cloudflare Workers

## 📂 Project Structure

```bash
src/
├── assets/         # Images, icons
├── components/     # Reusable components
├── data/           # Data JSON files
├── hooks/          # Custom hooks
├── layouts/        # Layout components
├── pages/          # Main pages
├── styles/         # SCSS and styles
├── App.jsx
├── main.jsx
└── index.css
```

## 📦 Build Development

### 1. Clone repository

```bash
git clone https://github.com/duongtrn03/frontend-assessment
```

### 2. Navigate to the project directory

```bash
cd frontend-assessment
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```bash
http://localhost:5173
```

### 6. Build for production

```bash
npm run build
```

### 7. Preview production build

```bash
npm run preview
```

### 8. Open preview in browser

```bash
http://localhost:4173
```

## 📦 Deployment

This project is deployed on **Cloudflare Workers** with automatic CI/CD.

Every push to the `master` branch triggers an automatic re-deployment.

🔗 Live: https://frontend-assessment.duongtd273.workers.dev/

## 🧨 Bonus points

Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

**Answer:**

- **+ 'a'** convert "a" to number, but "a" is not a number, so + 'a' returns NaN.

- We have: 'b' + 'a' = 'ba'

- So: 'ba' + NAN + a = "baNANa"

- Finaly: "baNANa".toLowerCase() => "banana"
