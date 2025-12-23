# 🛒 E-Commerce Website (React)

A complete **React-based E-Commerce web application** built as a capstone project.  
This project includes product listing, product details, cart functionality, admin product management, authentication, and UI enhancements like Dark/Light mode.

---

## 🚀 Live Demo

🔗 Frontend: https://frontend-vqpc.onrender.com  
*(Backend optional – products are managed using localStorage)*

---

## 📌 Features

### 👤 User Features
- View all products
- Search products by name
- Filter products by price range
- View product details
- Add products to cart
- Update cart quantity
- Remove products from cart
- Checkout page
- Dark / Light mode toggle

---

### 🛠 Admin Features
- Admin login
- Add new products
- Delete products
- Admin-added products appear on Home page
- Admin-added products have working **View Details**

---

## 🧩 Tech Stack

- **Frontend:** React, React Router
- **State Management:** Zustand
- **Styling:** CSS
- **API:** FakeStore API
- **Storage:** localStorage (for admin-added products)
- **Deployment:** Render

---

## 📂 Project Structure

```
src/
│── api/
│   ├── api.js
│   ├── fakeStore.js
│
│── components/
│   ├── Navbar.js
│   ├── ProductCard.js
│   ├── ThemeToggle.js
│
│── pages/
│   ├── Home.js
│   ├── Products.js
│   ├── ProductDetails.js
│   ├── Cart.js
│   ├── Checkout.js
│   ├── Login.js
│   ├── Register.js
│   ├── AdminLogin.js
│   ├── AdminDashboard.js
│   ├── AddProduct.js
│
│── store/
│   ├── authStore.js
│   ├── cartStore.js
│   ├── themeStore.js
│
│── utils/
│   ├── productStorage.js
│
│── App.js
│── index.js
│── App.css
│── index.css
```

---

## 🔑 Admin Login

This project uses **frontend-only admin authentication**.

Example:
- Username: `admin`
- Password: `admin123`

*(You can change this logic inside `AdminLogin.js`)*

---

## 🛒 Cart Management

- Uses **Zustand**
- Cart state persists during session
- Supports:
  - Add to Cart
  - Increase / Decrease quantity
  - Remove item
  - Total price calculation

---

## 🌙 Dark / Light Mode

- Implemented using **Zustand**
- Toggle available in Navbar
- Theme persists across pages

---

## 🧪 How to Run Locally

```bash
npm install
npm start
```

Runs on: `http://localhost:3000`

---

## 📦 Deployment

- Frontend deployed on **Render**
- Static site deployment
- Any future commits automatically redeploy

---

## 📌 Notes

- Backend is optional
- Admin-added products are stored in `localStorage`
- FakeStore API products are merged with admin products on Home page

---

## 👩‍💻 Author

**Smitha Prasad.D**  
Capstone Project – E-Commerce Website

---

## ⭐ If you like this project

Give it a ⭐ on GitHub 🙂
