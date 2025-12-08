# 🏋️‍♀️ BMI-Calculator

A clean and minimal **React Native** application built using **Expo**, designed to calculate the **Body Mass Index (BMI)** of a user based on height and weight.  
This project demonstrates **React Native fundamentals** — creating stateful components, handling user input, applying custom styles, and building a dynamic, interactive UI.

---

## 🧭 Table of Contents
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Result Display](#result-display)
- [Author](#author)

---

## 📝 Overview

**BMI-Calculator** allows users to input their height and weight to calculate their BMI, and dynamically displays their BMI category (Underweight, Normal, Overweight, Obese) with color-coded badges.  

This project emphasizes:
- Component-based architecture  
- Handling user input and state with React Hooks  
- Conditional rendering and dynamic styling  
- Calculation logic and validation for real-world use  

---

## 📸 App Screenshots

| Screen | Preview |
|--------|---------|
| **Health Tracker** | <img src="assets/HealthTracker.jpeg" width="250" style="border-radius:12px;" /> |
| **Attempt Without Adding Metrics** | <img src="assets/NotAddingMetrics.jpeg" width="250" style="border-radius:12px;" /> |
| **Adding Valid Numbers** | <img src="assets/AddValidNumbers.jpeg" width="250" style="border-radius:12px;" /> |


## ✨ Features

- ✅ Built with **Expo CLI**
- 📏 Input fields for **Height (cm)** and **Weight (kg)**
- ⚡ Calculates **BMI** dynamically and displays result
- 🎨 Color-coded BMI categories for **Underweight, Normal, Overweight, Obese**
- 💅 Clean, minimal, and user-friendly UI
- 🧱 Demonstrates **React Hooks**, state management, and conditional rendering
- 🔄 Supports **live reloading** using the **Expo Go** app

---

## 💻 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **React Native** | Frontend framework |
| **Expo CLI** | Development & build environment |
| **JavaScript (ES6+)** | App logic |
| **StyleSheet API** | Styling components |

---

## ⚙️ Installation

Follow these steps to set up and run the project locally:

```bash
# 1️⃣ Create the Expo project
npx create-expo-app BMI-Calculator

# 2️⃣ Navigate into the project folder
cd BMI-Calculator

# 3️⃣ Install dependencies
npm install
```
🧩 **Note:** Make sure you have **Node.js (v18 or above)** and **npm** or **yarn** installed on your system.

If you don’t have **Expo CLI** installed globally, run:

```bash
npm install -g expo-cli
```

---
## 🚀 Running the Project

Start the development server:

```bash
npm start
# or
npx expo start --tunnel
```
From there, you can:

- 📱 **Scan the QR code** using the **Expo Go** app (available on both Android & iOS)

- 🖥️ Or choose one of the following options directly in the terminal or browser:
  - Press **`a`** → Run on Android device/emulator  
  - Press **`i`** → Run on iOS simulator *(Mac only)*  
  - Press **`w`** → Run in your web browser  

> 💡 **Tip:** Expo Go provides instant reloading — any saved code changes will automatically appear in your app in real time.

---
## Result Display

Shows BMI value and category badge dynamically. Categories and colors:

- **Underweight** → Blue (`#3498DB`)
- **Normal** → Green (`#2ECC71`)
- **Overweight** → Orange (`#F39C12`)
- **Obese** → Red (`#E74C3C`)
---
## 👩‍💻 Author

**Alma Muzliukaj**  
💼 *Computer Science Student*  
🌐 [https://github.com/almamuzliukaj](https://github.com/almamuzliukaj)  
📧 [almamuzliukaj@gmail.com](mailto:almamuzliukaj@gmail.com)

---
