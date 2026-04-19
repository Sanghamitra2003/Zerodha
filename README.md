# 📈 Zerodha - Full Stack MERN Trading Platform (Zerodha Clone)

Zerodha is a high-performance, full-stack trading application built using the **MERN stack**. It replicates the professional UI/UX and complex functionalities of modern trading platforms like Zerodha. The project features advanced cross-domain authentication, real-time data visualization with Chart.js, and a scalable micro-frontend architecture.

## 🚀 Live Demo

![Zerodha Demo](./demo.gif.gif)

- **Main Website:** [https://zerodha-web.vercel.app](https://zerodha-web.vercel.app)
- **Trading Dashboard:** [https://zerodha-admin.vercel.app](https://zerodha-admin.vercel.app)
- **Backend API:** [https://zerodha-ci10.onrender.com](https://zerodha-ci10.onrender.com)

## 🛠️ Tech Stack & Tools

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

- **Data Visualization:** **Chart.js** (via `react-chartjs-2`) for dynamic Doughnut and Bar charts.
- **Icons & UI:** **Font Awesome v4** (integrated for crisp, professional trading icons) & Bootstrap.
- **Hosting:** Vercel (Frontend & Dashboard) & Render (Backend)

## 🧠 System Architecture & Data Flow

### 1. Advanced Cross-Domain Authentication

This project solves the complex challenge of maintaining a user session across two different domains (`zerodha-web` and `zerodha-admin`).

- **Token Generation:** When a user logs in or signs up, the backend validates credentials and generates a **JWT**.
- **Token Transfer:** To bridge the subdomains, the token is securely passed from the main marketing site to the dashboard via URL query parameters.
- **Session Persistence:** The dashboard extracts the token, saves it to `localStorage`, and continuously verifies it against the backend `/verify` route to unlock protected data and prevent redirect loops.

### 2. Live Data Visualization with Chart.js

The dashboard provides a deep analytical view of user investments by transforming raw backend data into visual insights:

- **Doughnut Chart:** Visualizes the portfolio weightage and equity distribution across different assets.
- **Bar Chart:** Compares individual stock prices, showing total investment value versus current value.
- **Dynamic Updates:** React fetches JSON data (Holdings and Positions) from MongoDB via the Express REST API. This data is dynamically mapped into Chart.js datasets, triggering the HTML5 Canvas to render real-time, interactive graphs that respond to hover events.

## ✨ Key Features

- **Real-time Watchlist:** Track live prices and percentage changes for stocks like INFY, TCS, ONGC, and RELIANCE.
- **Holdings & Positions:** Detailed breakdown of investments, including current value, P&L, margins, and total investment metrics.
- **Security:** Implemented **CORS** (Cross-Origin Resource Sharing) explicitly allowing only authorized Vercel frontend domains to access the Render backend API.
- **Professional UI:** Matches industry standards for financial applications utilizing clean CSS architectures and Font Awesome v4 icons.

## ⚙️ Local Setup Instructions

**1. Clone the repository:**
\`\`\`bash
git clone https://github.com/Sanghamitra2003/Zerodha.git
\`\`\`

**2. Configure Backend:**
\`\`\`bash
cd backend
npm install

## Create a .env file and add: MONGO_URL, PORT, and TOKEN_KEY

npm start
\`\`\`

**3. Configure Frontend (Web / Admin):**
\`\`\`bash
cd frontend
npm install
npm start
\`\`\`

## 👤 Author

**Sangamitra Samal**

- **GitHub:** [https://github.com/Sanghamitra2003](https://github.com/Sanghamitra2003)
- **LinkedIn:** [Sangamitra Samal](https://www.linkedin.com/in/sanghamitra-samal-56836b236)

🎓 **Recent Computer Science Graduate** actively seeking **Associate Software Engineer / New Grad** roles.
💡 Skilled in the MERN stack, Data Structures & Algorithms, Python, and AI/Machine Learning.

---

_Built with passion to demonstrate Full-Stack Engineering, API Design, and Interactive Data Visualization._
