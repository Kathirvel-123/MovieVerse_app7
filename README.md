# 🎬 MovieVerse

MovieVerse is a modern, responsive web app for searching movies and TV shows. It uses the OMDB API to provide instant results, detailed information, and a smooth dark-themed UI built with React and Tailwind CSS.

---

##  Features

- 🔎 Smart movie and TV show search
- 🌟 Popular movies showcased on homepage
- 🎭 Filter by type: Movies, Series, Episodes
- 📱 Mobile-first, fully responsive design
- 🎨 Sleek dark UI with gradients and glassmorphism
- 🔍 Detailed movie page: Poster, Plot, Actors, Ratings, etc.
- 🌓 Optimized for comfort and accessibility

---

##  Tech Stack

- **Frontend:** React, Tailwind CSS
- **Routing:** React Router v6+
- **API:** OMDB API ([https://omdbapi.com](https://omdbapi.com))
- **Build Tool:** Vite

---

##  Project Structure
```
src/
├── assets/
├── components/
│ ├── AboutPage.jsx
│ ├── MovieCard.jsx
│ ├── Navbar.jsx
│ ├── Pagination.jsx
│ └── SearchBar.jsx
├── pages/
│ ├── MovieDetails.jsx
│ └── SearchPage.jsx
├── routes/
│ └── AppRoutes.jsx
├── services/
│ └── omdbApi.js
├── App.jsx
└── main.jsx
public/
├── fallback.jpg
└── vite.svg

```
---

##  Setup & Development

1. **Clone this repo:**
    ```
    git clone https://github.com/your-username/movieverse.git
    ```

2. **Install dependencies:**
    ```
    npm install
    ```

3. **Configure OMDB API key:**
    - Create a `.env` file in the root directory.
    - Add:
      ```
      VITE_OMDB_API_KEY=your_omdb_api_key_here
      ```

4. **Start the app:**
    ```
    npm run dev
    ```

5. **Open in your browser:**
    ```
    http://localhost:5173
    ```

---
## Future Improvements 
- Add favorites / watchlist

- Add genre-based browsing

- Add pagination info (total results, last page)

- Add loading skeletons and better error states

- Add unit tests for components and API layer
---
