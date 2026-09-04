# Student Course Management Application

A simple React-based Student Course Management Application developed using **React Router** and the **Context API**.

## 📌 Project Description

This application allows users to navigate between different pages and view course details. It also uses the Context API to manage and share student information across components.

The application demonstrates important React concepts such as:

* Functional Components
* JSX
* React Router
* Dynamic Routing
* Context API
* Props and Component Reusability

---

## 🚀 Features

* Home page displaying shared student information
* Courses page displaying available courses
* About page with application information
* Navigation without full page reload
* Dynamic course routes
* Course details based on course ID
* Shared student information using Context API

---

## 🛠️ Technologies Used

* React
* JavaScript
* JSX
* React Router DOM
* Context API
* HTML
* CSS

---

## 📂 Project Structure

```text
src/
│
├── components/
│   └── Navbar.jsx
│
├── context/
│   └── StudentContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Courses.jsx
│   ├── CourseDetails.jsx
│   └── About.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project folder

```bash
cd student-course-management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install React Router

```bash
npm install react-router-dom
```

### 5. Start the application

```bash
npm run dev
```

The application will run on a local development server.

---

## 📄 Pages

### 🏠 Home Page

The Home page displays the shared student information using the Context API.

Example information:

* Name
* Course
* College

---

### 📚 Courses Page

The Courses page displays the available courses.

Example courses:

1. React Development
2. Python Programming

Each course contains a link to view its detailed information.

---

### 🔄 Dynamic Course Routes

The application uses dynamic routing with the following route:

```text
/course/:id
```

Examples:

```text
/course/1
/course/2
```

The course ID is accessed using the `useParams()` hook from React Router.

---

### ℹ️ About Page

The About page provides basic information about the Student Course Management Application.

---

## 🧭 Application Routes

| Page     | Route       |
| -------- | ----------- |
| Home     | `/`         |
| Courses  | `/courses`  |
| Course 1 | `/course/1` |
| Course 2 | `/course/2` |
| About    | `/about`    |

---

## 🔗 React Router

React Router is used to navigate between pages without reloading the entire application.

The main components used are:

* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `useParams`

Example dynamic route:

```jsx
<Route path="/course/:id" element={<CourseDetails />} />
```

---

## 🌐 Context API

The Context API is used to manage shared student information.

Student information is stored in `StudentContext` and can be accessed by components using the `useContext()` hook.

Example:

```jsx
const student = useContext(StudentContext);
```

This avoids passing the same student data manually through multiple components.

---

## 🧩 React Concepts Demonstrated

### Functional Components

All components in this project are created as functional components.

### JSX

JSX is used to create the user interface.

### Dynamic Routing

Dynamic routes allow different course details to be displayed based on the course ID.

### Context API

Context API provides shared student information across components.

### Component Reusability

Components such as the navigation bar can be reused throughout the application.

---

## 📸 Expected Functionality

Users can:

1. Open the Home page.
2. View shared student information.
3. Navigate to the Courses page.
4. Select a course.
5. View course details using a dynamic URL.
6. Navigate to the About page.

---

## 🎯 Learning Outcomes

After completing this project, you will understand:

* How to create functional components in React
* How to use JSX
* How to implement navigation using React Router
* How to create dynamic routes
* How to use `useParams()`
* How to create and use Context API
* How to share data between components

---

## 👩‍💻 Author

**Pratikshya Panda**

B.Tech – Computer Science and Engineering (Data Science)

---

## 📜 Conclusion

This project is a simple implementation of a Student Course Management Application using React. It demonstrates how React Router can be used for navigation and dynamic routing, while the Context API helps manage and share student information across multiple components.

