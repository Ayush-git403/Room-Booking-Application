# 🏠 Room Booking Application
A **full-stack room booking platform inspired by Airbnb** where users can browse properties, view room details, and manage bookings.<br>
This project demonstrates **backend development, MVC architecture, database integration, and REST API design**.

# ✨ Features

🔍 Browse available rooms
🏡 View detailed property listings
📸 Upload room images
➕ Add new room listings
✏️ Update property details
❌ Delete listings
🔐 Session based authentication
📦 RESTful CRUD APIs
🎨 Server-side rendering with EJS

---

# 🧰 Tech Stack

## 💻 Frontend

* HTML5
* CSS3
* Tailwind CSS
* EJS Templates

## ⚙️ Backend

* Node.js
* Express.js

## 🗄 Database

* MongoDB
* Mongoose ODM

## 📦 Libraries

* Multer → file uploads
* Express-session → authentication sessions
* Connect-mongo → session storage
* Nodemon → development server

---

# 🧭 Project Architecture

This project follows **MVC (Model View Controller)** architecture.

```
User Request
     │
     ▼
Routes
     │
     ▼
Controllers
     │
     ▼
Models (MongoDB)
     │
     ▼
Views (EJS Templates)
     │
     ▼
Response to Client
```

---

# 🔄 Application Flow

```mermaid
flowchart TD

A[User] --> B[Frontend UI]

B --> C[Express Routes]

C --> D[Controller Logic]

D --> E[Database MongoDB]

E --> D

D --> F[Render View EJS]

F --> A
```

---

# 📁 Project Structure

```
Room-Booking-Application
│
├── controllers
│   ├── hostController.js
│   └── storeController.js
│
├── models
│   └── listingModel.js
│
├── routes
│   ├── hostRouter.js
│   └── storeRouter.js
│
├── views
│   ├── layouts
│   └── pages
│
├── public
│   ├── css
│   └── images
│
├── uploads
│
├── utils
│
├── app.js
└── package.json
```

---

# ⚙️ Installation

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Ayush-git403/Room-Booking-Application.git
```

---

## 2️⃣ Go into the project folder

```bash
cd Room-Booking-Application
```

---

## 3️⃣ Install dependencies

```bash
npm install
```

---

## 4️⃣ Setup Environment Variables

Create `.env` file

```
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

---

## 5️⃣ Run the server

```bash
npm start
```

or

```bash
nodemon app.js
```
# 🚀 Future Improvements

⭐ User authentication with JWT
⭐ Payment gateway integration
⭐ Booking calendar
⭐ Reviews & ratings
⭐ Search & filters
⭐ Cloud image storage

---

# 📚 What I Learned

✔ Building REST APIs with Express
✔ Implementing MVC architecture
✔ MongoDB database design
✔ File upload handling with Multer
✔ Session based authentication
✔ Structuring full-stack projects

---

# 👨‍💻 Author

**Ayushman Srivastava**

🎓 B.Tech Computer Science Engineering
🔗 GitHub
https://github.com/Ayush-git403

# 📜 License

This project is created for **learning and educational purposes**.
