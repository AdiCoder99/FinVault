# FinVault - Full-Stack Financial Dashboard

FinVault is a full-stack, secure finance tracking application built with the MERN stack (MongoDB, Express, React, Node.js). It provides robust role-based access control (RBAC), a secure REST API, and a highly responsive, modern corporate UI to track transactions, visualize expenses, and manage users.

## 🚀 Tech Stack

### Frontend
- **React 19** & **Vite**: Blazing fast development and optimized production builds.
- **Tailwind CSS v4**: Utility-first CSS framework enforcing a strict, brutalist/corporate design system (4px/8px spacing, pure colors, 1px borders, no glassmorphism).
- **React Router v7**: Client-side routing with protected routes and role-based guards.
- **Recharts**: Data visualization for category-wise expense tracking.
- **Axios**: API client configured with global JWT interception.
- **Lucide React**: Clean, professional vector icons.

### Backend
- **Node.js** & **Express**: Fast, scalable server environment.
- **MongoDB** & **Mongoose**: NoSQL database and object modeling.
- **JSON Web Tokens (JWT)**: Stateless authentication.
- **Bcrypt**: Secure password hashing.
- **Express Rate Limit**: Brute-force protection and API abuse prevention.

---

## ✨ Features

- **Strict Role-Based Access (RBAC)**:
  - **Admin**: Full control. Can create/edit/delete/restore transactions, and create/manage users and their roles/statuses.
  - **Analyst**: Can view all transactions and dashboards, but cannot mutate data.
  - **Viewer**: Can only view the high-level dashboard summaries.
- **Transaction Management**: Add income or expenses, categorize them, and manage them via soft-deletes and restore functionality.
- **Dashboard Analytics**: Top-level metrics (Total Income, Total Expense, Balance), Recent Transactions table, and a dynamic Expense by Category Pie Chart.
- **Secure Architecture**: Environment variables, password hashing, and API route rate-limiting.

---

## 🛠️ Local Setup & Installation

### 1. Clone the repository
Ensure you are in the root directory containing both the `frontend` and `backend` folders.

### 2. Backend Setup
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_super_secret_jwt_key
   ```
4. Start the backend development server:
   ```bash
   npm run server
   ```
   *The backend will run on `http://localhost:5000`.*

### 3. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend will be accessible at `http://localhost:5173`.*

---

## 🔑 Testing Credentials

Use these pre-configured accounts to test the different roles on the frontend:

### Admin
- **Email:** `admin@test.com`
- **Password:** `password123`

### Analyst
- **Email:** `analyst@test.com`
- **Password:** `password123`

### Viewer
- **Email:** `viewer@test.com`
- **Password:** `password123`

---

## 🌐 API Documentation

### Authentication
- `POST /api/auth/login` - Logs in a user and returns a JWT token.

### Users (Protected & Role-Gated)
- `POST /api/user/create` - Creates a new user (Admin only).
- `GET /api/user/all` - Returns all users (Admin & Analyst).
- `PUT /api/user/update-role/:id` - Updates a user role (Admin only).
- `PUT /api/user/update-status/:id` - Activates/Deactivates a user (Admin only).
- `DELETE /api/user/delete/:id` - Permanently deletes a user (Admin only).

### Transactions (Protected & Role-Gated)
- `POST /api/transaction/add` - Creates a new transaction (Admin only).
- `GET /api/transaction/all` - Returns paginated transactions (Admin & Analyst).
- `PUT /api/transaction/update/:id` - Updates a transaction (Admin only).
- `PUT /api/transaction/delete/:id` - Soft deletes a transaction (Admin only).
- `GET /api/transaction/trash` - Returns soft-deleted transactions (Admin only).
- `PUT /api/transaction/restore/:id` - Restores a soft-deleted transaction (Admin only).

### Summary (Accessible to Admin, Analyst, and Viewer)
- `GET /api/summary/overview` - Returns total income, total expense, and balance.
- `GET /api/summary/category-wise` - Returns totals grouped by category.
- `GET /api/summary/recent-transactions` - Returns the latest 10 transactions.
- `GET /api/summary/monthly-summary` - Returns income and expense totals grouped by month.

---

**Created by:** AdiCoder  
**Last Updated:** April 2026
