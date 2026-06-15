# 📚 BookNest
### Full-Stack Book Management Platform for Organizing and Tracking Books

BookNest is a modern MERN application that helps users manage a personal or shared book collection with a clean interface and a simple REST API.

The platform combines:
- ⚡ React + Vite frontend
- 🧠 Structured book validation
- 📚 MongoDB-backed book storage
- 🔐 Express REST APIs
- 📊 Card and table based book browsing
- 🎨 Responsive Tailwind UI

to provide a simple, fast, and organized book management experience.

---

# 📌 Problem Statement

Managing a growing book collection can quickly become messy.

Books are often tracked in spreadsheets, notes, or scattered records, which makes it hard to:
- Add new books consistently
- Find a specific title quickly
- Keep author, genre, and publisher details organized
- Update records without losing data
- Review a full catalog at a glance

The goal of this project is to create a lightweight book management system that:
1. Stores books in a structured database
2. Lets users create, view, update, and delete records
3. Presents books in both card and table layouts
4. Keeps the interface simple and responsive

---

# 🚀 Key Features

## 📖 Book CRUD Management

The application supports the full book lifecycle:
- Create new book entries
- View all books
- Open a single book detail screen
- Update existing book records
- Delete books when needed

### Book Fields

- Title
- Author
- Genre
- Publish Year
- Pages
- Publisher

---

## 🗃️ MongoDB-Powered Storage

Book data is stored in MongoDB through Mongoose, making it easy to:
- Persist records reliably
- Enforce schema validation
- Keep book titles unique
- Maintain consistent data types

---

## 🎨 Dual List Views

Users can browse books in two different layouts:

### Card View

Best for quick visual scanning and action shortcuts.

### Table View

Best for dense catalog review and side-by-side comparison.

---

## ⚡ Responsive Frontend Experience

The frontend is built with React, Vite, and Tailwind CSS for a fast and responsive UI.

### UI Highlights

- Mobile-friendly layout
- Loading spinner states
- Clean form screens
- Action icons for edit, view, and delete
- Simple navigation between pages

---

## 🔐 Validation and Reliability

The backend includes validation and error handling to keep data consistent.

### Core Behaviors

- Required field checks
- Unique title validation
- Year and page number constraints
- Centralized error handling
- Structured API responses

---

# 🧠 How the App Works

## Step 1 — Add a Book

The user opens the create form and enters:

- Title
- Author
- Genre
- Year
- Pages
- Publisher

---

## Step 2 — Backend Validation

The server checks:

- Whether all required fields are present
- Whether the title is unique
- Whether the values satisfy schema rules

---

## Step 3 — Save to MongoDB

If validation passes, the new record is stored in MongoDB and returned to the client.

---

## Step 4 — Browse and Manage

Users can then:

- View the catalog
- Switch between card and table layouts
- Open book details
- Edit a book
- Remove a book

---

# 🏗 System Architecture

```txt
┌─────────────────────────┐
│      Frontend           │
│ React + Vite + Tailwind │
└───────────┬─────────────┘
						│ API Calls
						▼
┌─────────────────────────┐
│    Express Backend      │
│     REST API Server     │
└───────────┬─────────────┘
						│
		 ┌──────┴──────┐
		 ▼             ▼
	Mongoose      MongoDB
	Models        Database
```

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Notistack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Utilities

- Morgan
- CORS
- Body Parser
- Cookie Parser
- Nodemon

---

# 📂 Project Structure

```txt
BookNest-main-main/
│
├── client/
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   └── pages/
│   └── vite.config.js
│
├── server/
│   ├── index.js
│   ├── connection/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── utils/
│
└── README.md
```

---

# 📡 API Endpoints

## Health Check

```http
GET /
```

## Create Book

```http
POST /api/v1/create
```

## Get All Books

```http
GET /api/v1/allbooks
```

## Get Single Book

```http
GET /api/v1/book/:id
```

## Update Book

```http
PUT /api/v1/update/:id
```

## Delete Book

```http
DELETE /api/v1/delete/:id
```

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone <repo-url>
cd BookNest-main-main
```

---

## 2. Install Server Dependencies

```bash
cd server
npm install
```

---

## 3. Install Client Dependencies

```bash
cd ../client
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file inside `server/`.

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/booknest
```

If your database is hosted elsewhere, replace the MongoDB URI with your own connection string.

---

## 5. Start the Server

```bash
cd server
npm run dev
```

---

## 6. Start the Client

```bash
cd client
npm run dev
```

---

# 🧪 Example Usage

## Example 1 — Add a Book

```txt
Title: Clean Code
Author: Robert C. Martin
Genre: Programming
Year: 2008
Pages: 464
Publisher: Prentice Hall
```

## Example 2 — View the Catalog

```txt
Switch between Card View and Table View to browse the book list.
```

## Example 3 — Update or Delete

```txt
Open a book detail screen, edit the record, or remove it from the collection.
```

---

# 📈 Future Improvements

## Planned Features

- Search and filter by title, author, or genre
- Pagination for large collections
- Book cover image support
- User authentication and roles
- Favorites or reading list support
- Import and export options
- Advanced analytics dashboard
- Mobile-first progressive web app support

---

# 💡 Engineering Highlights

This project demonstrates:

- Full-stack MERN development
- REST API design
- MongoDB schema modeling
- Form validation and error handling
- Component-based React UI
- Responsive layout design
- CRUD workflow implementation

---

# 🏆 Use Cases

## Personal Library

- Track your reading collection
- Keep book metadata organized

## Classrooms and Study Groups

- Maintain a shared reading catalog
- Review recommended titles quickly

## Small Libraries

- Manage a lightweight digital inventory
- Update records without spreadsheets

## Book Clubs

- Store reading lists
- Share title details with members

---

# ⚠ Important Note

This project is intended for learning and demonstration purposes.

Always:

- Validate data before deployment
- Use a proper production database configuration
- Add authentication and authorization if the app is used by multiple users

---

# 🤝 Contributing

Contributions are welcome.

You can contribute by:

- Improving UI/UX
- Adding search and filters
- Strengthening validation
- Enhancing API error handling
- Writing tests
- Improving documentation

---

# 📜 License

Licensed under the MIT License.

---

# 👨‍💻 Author

## Pradeep Kumar Sinwar

Backend Developer | Competitive Programmer

---

# ⭐ If You Like This Project

Give this repository a star and share it with others.

---

# 🏁 Final Goal

Helping users organize books cleanly and efficiently with a simple full-stack book management system.

---
