# 📊 Employee Management Dashboard

A responsive and scalable Employee Management Dashboard built using React.js, AG Grid, and Tailwind CSS.

This project demonstrates real-world frontend engineering skills including data grid management, state handling, filtering, search optimization, and scalable component architecture.

---

## 🚀 Live Features

- 📋 Employee data table using AG Grid
- 🔍 Global search with debounced input (performance optimized)
- 🎯 Filter employees by status (All / Active / Inactive)
- 📤 Export data to CSV using AG Grid API
- 📊 Dynamic stats cards (Total, Active, Avg Salary, Avg Rating)
- 🔄 Toggle employee status using checkbox (real-time updates)
- 📱 Fully responsive layout with mobile horizontal scroll support
- ⚡ Client-side state management (no backend required)

---

## 📸 Screenshots

![Employee Dashboard](./screenshots/dashboard.png)

## 🛠️ Tech Stack

- React.js (Hooks, Functional Components)
- AG Grid (Enterprise-grade data table)
- Tailwind CSS (Styling & responsiveness)
- React Icons

---

## 📂 Project Structure

src/
│── components/
│   ├── AgGrid.jsx
│   ├── Header.jsx
│   ├── StatsCard.jsx
│   ├── ToolbarSection.jsx
│
│── data/
│   ├── employees.js
│
│── App.jsx
│── main.jsx

---

## ⚙️ Key Functionalities

### 📊 AG Grid Table
- Displays structured employee data
- Custom rendering for status and salary formatting
- Pagination enabled for better UX
- Sorting and filtering support

### 🔍 Search (Debounced)
- Implemented using `useEffect` and `setTimeout`
- Prevents unnecessary re-renders
- Optimized for performance

### 🎯 Filtering System
- Filter employees by:
  - Active
  - Inactive
  - All
- Uses original dataset to maintain data integrity

### 🔄 Status Toggle
- Checkbox-based activation/deactivation
- Updates state immutably
- Syncs across filters and stats dynamically

### 📤 Export Feature
- Export full dataset as CSV using AG Grid API

---

## 📱 Responsive Design

- Mobile-first approach using Tailwind CSS
- Stats cards adapt to screen size
- Table uses horizontal scrolling on small devices
- Clean layout across all breakpoints

---

## 📈 Scalability & Architecture Decisions

This project was built with scalability in mind:

### 🧩 Component-Based Architecture
UI is split into reusable components for maintainability and future scalability.

### 📊 State Separation Strategy
- `allData` → source of truth (original dataset)
- `rowData` → UI-rendered dataset

This prevents data inconsistency during filtering and updates.

### ⚡ Performance Optimization
- Debounced search implementation reduces unnecessary re-renders
- AG Grid quick filtering for efficient client-side search

### 🔄 Immutable State Updates
All updates (filtering, toggling status) are handled immutably to ensure predictable UI behavior.

### 📦 Efficient Data Handling
All transformations are done on controlled state to ensure scalability with larger datasets.

---

## 🧠 Key Learnings

- Real-world React state management
- AG Grid integration and customization
- Performance optimization (debounce)
- Component-driven architecture
- Scalable frontend design patterns

---

## 📦 Setup Instructions

```bash
git clone https://github.com/your-username/employee-dashboard.git
cd employee-dashboard
npm install
npm run dev