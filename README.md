# Movify - Express.js, MongoDB, and RESTful API

## Overview

This project is a basic **demo** IMDB-style movie site built using **Express.js**, **MongoDB**, and **RESTful API principles**. It showcases essential CRUD (Create, Read, Update, Delete) operations and **SEO optimization** using **Server-Side Rendering (SSR)** with **EJS templating**.

> ⚠ **Note:** This project is for demonstration purposes only and is not an official or production-ready application.

## Features

- 📌 **Movie Management** – Add, view, edit, and delete movie records.
- 🌍 **SEO Optimization** – Improved page visibility using SSR.
- 🔄 **RESTful API** – Structured and scalable API design.
- 🖥️ **EJS Templating** – Dynamic content rendering with Express and EJS.
- 🗄️ **MongoDB Integration** – Store and manage movie data efficiently.
- 🚀 **Express.js Framework** – Fast and lightweight server-side development.

## Screenshots

Preview:

<img src="/img/home.png" alt="Screenshot 1" width="400">
<img src="/img/view.png" alt="Screenshot 2" width="400">
<img src="/img/edit.png" alt="Screenshot 3" width="400">
<img src="/img/post.png" alt="Screenshot 4" width="400">

## Tech Stack

- **Backend:** Express.js (Node.js framework)
- **Database:** MongoDB (NoSQL database)
- **Templating Engine:** EJS (Embedded JavaScript)
- **Hosting:** Localhost (or deployable on platforms like Vercel, Render, etc.)

## Installation & Setup

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Clone the Repository

```sh
git clone https://github.com/Keith-Poncardas/movify.git
cd imdb-clone
```

### Install Dependencies

```sh
npm install
```

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
MONGO_URI=<your_mongo_database_uri>
PORT=<your_preferred_port>
```

### Start the Application

```sh
nodemon server.js
```

The server will run on `http://localhost:<PORT>`.

## API Endpoints

### Movies

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| GET    | `/movie`          | Fetch all movies         |
| GET    | `/movie/:id/view` | Fetch a single movie     |
| POST   | `/movie`          | Add a new movie          |
| PUT    | `/movie/:id/edit` | Update an existing movie |
| DELETE | `/movie/:id`      | Delete a movie           |


## Future Improvements

- ✅ Implement authentication for user reviews and ratings.
- ✅ Add movie categories and advanced filtering.
- ✅ Improve UI/UX for a better user experience.
