# React SaaS Dashboard

A responsive **SaaS-style dashboard** built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Material UI**.  
Features include a **light/dark theme toggle**, analytics charts, and an orders list with pagination.

---

## ✨ Features
- 🌗 **Light / Dark theme** toggle (Tailwind + MUI integration)
- 📊 Dashboard cards with key metrics
- 📈 Interactive charts (Bar, Line, Pie, Map) using **Recharts** and **react-simple-maps**
- 🗂️ Orders list with pagination
- ⚡ Fast dev experience with **Vite**
- 💅 Modern UI components via **Material UI** & Tailwind utilities
- 📱 Fully responsive layout (desktop & mobile)

---

## 🛠️ Tech Stack
- **React 19** + **Vite 7**
- **Tailwind CSS 4**
- **Material UI 7**
- **Recharts 3** & **react-simple-maps 3** (data visualization)
- **lucide-react** (icons)
- **d3-geo** (map projections)

---

## 📂 Project Structure
```

src/
├── assets/              # SVGs, images, icons
├── components/          # Reusable UI (Header, Sidebar, Cards, Charts…)
├── pages/               # Page-level components (Dashboard, Orders, etc.)
├── App.jsx              # App entry + routing
└── main.jsx             # Vite/React entry point

````

---

## ⚙️ Getting Started

1️⃣ **Clone the repository**
```bash
git clone https://github.com/gayathritalasila/react-saas-dashboard.git
cd react-saas-dashboard
````

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Run the dev server**

```bash
npm run dev
```

Visit **[http://localhost:5173/](http://localhost:5173/)** (default Vite port).

4️⃣ **Build for production**

```bash
npm run build
```

---

## 🌗 Usage

* Click the **theme icon** in the header to toggle light/dark mode.
* Explore the dashboard cards, charts, and the paginated orders list.
* Open the right-side panel for **Notifications**, **Activities**, or **Contacts**.

---

## 🧩 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |


## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push and open a Pull Request

---

