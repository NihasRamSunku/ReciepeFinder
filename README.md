
# 🥘 Recipe Finder

A full-stack web application to explore thousands of recipes with filters, search options, and step-by-step cooking instructions. The app utilizes a large dataset sourced from Food.com to deliver a smooth and engaging user experience.

---

## 📁 Dataset

This project uses the [RAW_recipes.csv](https://www.kaggle.com/datasets/shuyangli94/food-com-recipes-and-user-interactions) file from the **Food.com Recipes and Interactions** dataset.

Due to GitHub's 100 MB file limit, the dataset is **not stored directly** in the repository. You must download and unzip it manually.

### 🔽 Steps to Add the Dataset:

1. Download the dataset from:  
   https://www.kaggle.com/datasets/shuyangli94/food-com-recipes-and-user-interactions

2. Extract the ZIP file.

3. Copy `RAW_recipes.csv` to the following directory:

```
ReciepeFinder/
└── backend/
    └── data/
        └── RAW_recipes.csv
```

---

## 🚀 Features

- 🔍 Search recipes by title or ingredients
- 🧂 Filter by dietary preferences, time, or cuisine
- 📋 View step-by-step instructions
- 📊 Parses and displays large datasets efficiently
- 🖼️ Clean and minimal frontend

---

## 🛠️ Tech Stack

### Frontend:
- HTML, CSS, JavaScript

### Backend:
- Node.js (Express.js)
- CSV parser libraries (e.g., `csv-parser`, `fs`)

---

## 📁 Project Structure

```
ReciepeFinder/
├── backend/
│   ├── data/
│   │   └── RAW_recipes.csv      # Recipe dataset (added manually)
│   ├── server.js                # Main Node.js server
│   └── package.json             # Node dependencies
├── frontend/
│   ├── index.html               # Main frontend file
│   ├── styles.css               # Styling
│   └── script.js                # Frontend logic
└── README.md                    # Documentation
```

---

## ⚙️ Installation & Usage

### 1. Clone the repository

```bash
git clone https://github.com/NihasRamSunku/ReciepeFinder.git
cd ReciepeFinder
```

### 2. Add the dataset

As described earlier, download and place `RAW_recipes.csv` into `backend/data/`.

---

### 3. Install backend dependencies

```bash
cd backend
npm install
```

---

### 4. Start the backend server

```bash
npm start
```

> Server should run on [http://localhost:3000](http://localhost:3000)

---

### 5. Run the frontend

In your file explorer, open the following file in your browser:

```plaintext
ReciepeFinder/frontend/index.html
```

The frontend will interact with the backend via API calls.

---



## 🔧 Future Enhancements

- User login system and favorites
- Pagination and lazy loading
- Responsive mobile design
- API support for multiple datasets

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/feature-name`)
3. Commit your changes
4. Push and open a Pull Request

---

## 📄 License

MIT License © [Nihas Ram](https://github.com/NihasRamSunku)

---

