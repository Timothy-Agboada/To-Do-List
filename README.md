## 🚀 30-Day Coding Challenge: Day 3

This project is the third installment in my 30-day coding challenge. The goal for today was to build a classic yet essential web application: a To-Do list. This project focuses on CRUD (Create, Read, Update, Delete) operations on the front-end and demonstrates effective data management using browser storage.

### 📖 Project Overview

This is a sleek and modern To-Do List application that allows users to manage their daily tasks. It features a visually appealing interface with a gradient background and smooth animations. Users can add new tasks, mark existing tasks as complete, and delete tasks. All data is persisted in the browser's `localStorage`, so the list is saved between sessions.

### ✨ Live Demo & Screenshot

Below is a screenshot of the application's interface.
![Jun-09-2025 22-52-15](https://github.com/user-attachments/assets/ef2cc59b-35ae-4a27-9a36-783e7fdccbb3)


### 🌟 Key Features

* **Add, Complete, and Delete Tasks:** Full CRUD functionality for task management.
* **Persistent Storage:** Tasks are saved to `localStorage`, so your to-do list is waiting for you when you return.
* **Engaging UI/UX:** A beautiful gradient background, modern fonts, and a clean layout provide a pleasant user experience.
* **Smooth Animations:** Tasks gracefully fade in when added and fade out when deleted, making the interface feel responsive and alive.
* **Responsive Design:** The layout is optimized for a great experience on both mobile and desktop devices.
* **Efficient Rendering:** The DOM is updated efficiently, with single elements being targeted for add/complete actions to avoid unnecessary re-renders of the entire list.

### 💻 Technologies Used

This project was built using core front-end technologies and popular libraries for assets.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **Google Fonts:** Used for the modern 'Montserrat' typography.
* **Font Awesome:** Used for the checkmark, trash, and plus icons.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these simple steps:

1.  **Clone the repository (or download the code):**
    ```bash
    git clone [https://github.com/timothy-agboada/todo-list-app.git](https://github.com/timothy-agboada/todo-list-app.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd todo-list-app
    ```
3.  **Open the `index.html` file in your web browser:**
    * You can simply double-click the `index.html` file, or right-click and choose "Open with" your preferred browser.

No special installations or dependencies are required.

### 🎯 Learning Objectives

This project was a deep dive into several fundamental concepts of front-end development:

* **Advanced DOM Manipulation:** Dynamically creating, appending, and removing elements from the DOM in response to user actions.
* **Data-Driven UI:** Managing application state in a JavaScript array and rendering the UI based on that data.
* **Event Handling:** Attaching event listeners to dynamically created elements and using `event.stopPropagation()` where necessary.
* **Browser Storage:** Mastering the use of `localStorage` to persist application data, including serialization (`JSON.stringify`) and deserialization (`JSON.parse`).
* **CSS Animations & Transitions:** Implementing keyframe animations and transitions to create a more polished and engaging user interface.
